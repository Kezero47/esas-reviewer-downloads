export const CONTENT_STATUSES=['Draft','Needs Review','Published','Rejected'];

const text=value=>String(value??'').trim();

export function blankManagedQuestion(){
  return {
    id:'',subject:'',subjectName:'',topic:'',type:'Terminology',sourceId:'owner-import',
    sourceFile:'',importFolder:'Manual entries',section:'Owner content',number:1,pdfPage:0,prompt:'',choices:['','','',''],
    answer:null,explanation:'',formula:'',answerSource:'Owner review',sourceNote:'',
    status:'Draft',quality:'held'
  };
}

export function normalizeManagedQuestion(input={}){
  const base=blankManagedQuestion();
  const choices=Array.isArray(input.choices)?input.choices.slice(0,4).map(value=>String(value??'')):base.choices;
  while(choices.length<4)choices.push('');
  const parsedAnswer=input.answer===null||input.answer===undefined||input.answer===''?NaN:Number(input.answer);
  const answer=Number.isInteger(parsedAnswer)&&parsedAnswer>=0&&parsedAnswer<=3?parsedAnswer:null;
  const status=CONTENT_STATUSES.includes(input.status)?input.status:'Draft';
  const subjectName=text(input.subjectName||input.subject);
  const subject=text(input.subject)||slug(subjectName);
  const sourceFile=text(input.sourceFile);
  const importFolder=text(input.importFolder)||sourceFile||'Manual entries';
  return {...base,...input,id:text(input.id),subject,subjectName,topic:text(input.topic),type:text(input.type)||'Terminology',sourceId:text(input.sourceId)||'owner-import',sourceFile,importFolder,section:text(input.section)||'Owner content',number:Math.max(1,Number.parseInt(input.number,10)||1),pdfPage:Math.max(0,Number.parseInt(input.pdfPage,10)||0),prompt:text(input.prompt),choices,answer,explanation:text(input.explanation),formula:text(input.formula),answerSource:text(input.answerSource)||'Owner review',sourceNote:text(input.sourceNote),status,quality:status==='Published'&&answer!==null?'ready':'held'};
}

export function validateManagedQuestion(input,{items=[],originalId=''}={}){
  const question=normalizeManagedQuestion(input);
  const errors=[];
  if(!question.id)errors.push('Question ID is required.');
  if(!question.prompt)errors.push('Question prompt is required.');
  if(!question.subjectName)errors.push('Subject is required.');
  if(!question.topic)errors.push('Topic is required.');
  if(!question.type)errors.push('Question type is required.');
  if(question.status==='Published'&&question.answer===null)errors.push('Choose the correct answer before publishing.');
  if(items.some(item=>item.id===question.id&&item.id!==originalId))errors.push(`Question ID “${question.id}” already exists.`);
  return {question,errors,valid:errors.length===0};
}

export function filterManagedQuestions(items=[],{status='All',folder='All uploads',search=''}={}){
  const needle=text(search).toLowerCase();
  return items.map(normalizeManagedQuestion).filter(item=>(status==='All'||item.status===status)&&(folder==='All uploads'||item.importFolder===folder)&&(!needle||[item.id,item.prompt,item.subjectName,item.topic,item.type,item.sourceFile,item.importFolder].some(value=>String(value??'').toLowerCase().includes(needle))));
}

export function managedFolders(items=[]){
  const counts=new Map();
  for(const item of items.map(normalizeManagedQuestion))counts.set(item.importFolder,(counts.get(item.importFolder)||0)+1);
  return [...counts.entries()].sort((a,b)=>a[0].localeCompare(b[0])).map(([name,count])=>({name,count}));
}

export function upsertManagedQuestion(items=[],input,originalId=''){
  const question=normalizeManagedQuestion(input);
  const remaining=items.filter(item=>item.id!==(originalId||question.id));
  return [question,...remaining];
}

export function slug(value){
  return text(value).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'imported';
}
