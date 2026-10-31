import {distributeAnswers} from './answer-distribution.js';
import {examQuestions} from './printable-exam.js';
const normal=value=>String(value??'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
export const examItemKey=q=>JSON.stringify([normal(q.prompt),q.choices.map(normal).sort()]);
function shuffled(items,random){const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
export function createExamSets(bank,{count=80,setCount=1,mode='different',randomize=true,options={},filters={},distribution={mode:'original'},subjectCounts=null}={},random=Math.random){
  if(!Number.isInteger(count)||count<1)throw Error('Enter a positive whole number of questions.');
  if(!Number.isInteger(setCount)||setCount<1||setCount>20)throw Error('Choose 1 to 20 sets.');
  if(!['different','shuffle'].includes(mode))throw Error('Choose a set mode.');
  const seen=new Set(),pool=examQuestions(bank,filters).filter(q=>{const key=examItemKey(q);if(seen.has(key))return false;seen.add(key);return true;});
  const needed=count*(mode==='different'?setCount:1);
  if(needed>pool.length)throw Error(`These filters have ${pool.length} unique questions; ${needed} are needed. Reduce the questions or sets, or choose more sources.`);
  let allocations=null;
  if(subjectCounts){
    allocations=Object.entries(subjectCounts);
    if(!allocations.length||allocations.some(([,n])=>!Number.isInteger(n)||n<0)||allocations.reduce((sum,[,n])=>sum+n,0)!==count)throw Error('Subject question counts must be whole numbers totaling the questions per set.');
    for(const [id,n] of allocations){const available=pool.filter(q=>q.subject===id).length,required=n*(mode==='different'?setCount:1);if(required>available)throw Error(`A selected subject has ${available} eligible questions; ${required} are needed. Reduce its count or select more sources.`);}
  }
  const ordered=randomize?shuffled(pool,random):pool;
  const allocated=index=>allocations.flatMap(([id,n])=>ordered.filter(q=>q.subject===id).slice(index*n,index*n+n));
  const base=allocations?allocated(0):ordered.slice(0,count),now=Date.now();
  return Array.from({length:setCount},(_,index)=>{
    let questions=mode==='different'?(allocations?allocated(index):ordered.slice(index*count,(index+1)*count)):index?shuffled(base,random):base;
    if(allocations&&randomize)questions=shuffled(questions,random);
    if(mode==='shuffle'&&index&&count>1&&questions.every((q,i)=>q.id===base[i].id))questions=[...questions.slice(1),questions[0]];
    questions=distributeAnswers(questions,distribution,random);
    const set=setCount===1?(options.set||'A'):`${options.set?options.set+'-':''}${String.fromCharCode(65+index)}`;
    return {id:globalThis.crypto?.randomUUID?.()||`${now}-${index}-${Math.random().toString(36).slice(2)}`,createdAt:now,mode,distribution,options:{...options,set,columns:Number(options.columns)===2?2:1},questions:questions.map(({id,subject,sourceId,type,prompt,choices,answer,quality})=>({id,subject,sourceId,type,prompt,choices:[...choices],answer,quality}))};
  });
}
export function examFilename(exam){const title=String(exam.options.title||'ESAS Exam').replace(/[^a-zA-Z0-9_-]+/g,'_').slice(0,60),set=String(exam.options.set||'A').replace(/[^a-zA-Z0-9_-]+/g,'_').slice(0,20);return `${title}_Set_${set}.docx`;}
export function readExamLibrary(storage,uid){if(!uid)return [];const raw=storage.getItem(`esas.examLibrary.${uid}`);if(!raw)return [];const rows=JSON.parse(raw);if(!Array.isArray(rows))throw Error('Saved exam library could not be read.');return rows;}
export function saveExamLibrary(storage,uid,rows){if(!uid)throw Error('Sign in to save an exam.');try{storage.setItem(`esas.examLibrary.${uid}`,JSON.stringify(rows));}catch{throw Error('Device storage is full. Download your saved exams and remove ones you no longer need, then try again.');}}
