import {examQuestions} from './printable-exam.js';
import {createExamSets,examItemKey} from './exam-library.js';
const id=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;
export function normalizeExamPath(value=[]){
 const path=(Array.isArray(value)?value:String(value).split('/')).map(x=>String(x).trim()).filter(Boolean);
 if(path.length>6||path.some(x=>x==='.'||x==='..'||/[\\/\u0000-\u001f]/.test(x)||x.length>80))throw Error('Use up to six folder levels, with names of 1–80 characters.');
 return path;
}
export const sameExamPath=(a,b)=>JSON.stringify(normalizeExamPath(a))===JSON.stringify(normalizeExamPath(b));
const legacyLabel=(value,fallback)=>{const label=String(value||fallback).replace(/[\\/\u0000-\u001f]/g,' · ').trim().slice(0,80);return label==='.'||label==='..'||!label?fallback:label;};
export function examFolderPath(exam){try{if(exam.folderPath?.length)return normalizeExamPath(exam.folderPath);}catch{}return [legacyLabel(exam.options?.title,'Saved exams'),legacyLabel(`Set ${exam.options?.set||'A'}`,'Set A')];}
export const examParentPath=exam=>examFolderPath(exam).slice(0,-1);
export function examFolderChildren(rows,folders=[],path=[]){
 path=normalizeExamPath(path);const paths=[...folders,...rows.map(examFolderPath)].map(normalizeExamPath),children=new Map();
 for(const p of paths)if(p.length>path.length&&path.every((s,i)=>s===p[i])){
  const child=p.slice(0,path.length+1),key=JSON.stringify(child);
  if(!children.has(key))children.set(key,{path:child,name:child.at(-1),count:rows.filter(r=>{const f=examFolderPath(r);return child.every((s,i)=>s===f[i]);}).length});
 }
 return [...children.values()].sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}));
}
export function readExamFolders(storage,uid){if(!uid)return [];const raw=storage.getItem(`esas.examFolders.${uid}`);if(!raw)return [];const data=JSON.parse(raw);if(!Array.isArray(data))throw Error('Saved folders could not be read.');return data.map(normalizeExamPath);}
export function saveExamFolders(storage,uid,paths){if(!uid)throw Error('Sign in to save folders.');try{storage.setItem(`esas.examFolders.${uid}`,JSON.stringify(paths.map(normalizeExamPath)));}catch{throw Error('Folders could not be saved. Free some device storage and try again.');}}
export function addExamFolder(paths,parent,name){const path=normalizeExamPath([...normalizeExamPath(parent),String(name||'').trim()]);if(!String(name||'').trim())throw Error('Enter a folder name.');return paths.some(p=>sameExamPath(p,path))?paths:[...paths,path];}
export function nextExamSet(rows,parent){const used=new Set(rows.filter(r=>sameExamPath(examParentPath(r),parent)).map(r=>r.options.set));for(let n=0;n<10000;n++){let k=n+1,label='';while(k){k--;label=String.fromCharCode(65+k%26)+label;k=Math.floor(k/26);}if(!used.has(label))return label;}return `Set-${id()}`;}
export function selectManualExamQuestions(bank,ids,{count,setCount=1,mode='different'}={}){
 const byId=new Map(examQuestions(bank).map(q=>[q.id,q]));
 if(new Set(ids).size!==ids.length)throw Error('A question is selected more than once.');
 const rows=ids.map(id=>{const q=byId.get(id);if(!q)throw Error('A selected question is no longer available for scoring. Remove it and select another.');return q;});
 if(new Set(rows.map(examItemKey)).size!==rows.length)throw Error('Equivalent questions are selected from different sources. Keep one occurrence.');
 const needed=count*(mode==='different'?setCount:1);
 if(rows.length!==needed)throw Error(`Select exactly ${needed} questions for these sets. You currently have ${rows.length}.`);
 return rows;
}
export function createSiblingExam(bank,rows,exam,kind,random=Math.random){
 const parent=examParentPath(exam),set=nextExamSet(rows,parent),options={...exam.options,set};
 let pool=exam.questions;
 if(kind==='unused'){
  const family=rows.filter(r=>sameExamPath(examParentPath(r),parent)),used=new Set(family.flatMap(r=>r.questions.map(examItemKey)));
  pool=examQuestions(bank,exam.filters||{subjects:[...new Set(exam.questions.map(q=>q.subject))],sources:[...new Set(exam.questions.map(q=>q.sourceId))]}).filter(q=>!used.has(examItemKey(q)));
 }
 const [created]=createExamSets(pool,{count:exam.questions.length,mode:kind==='unused'?'different':'shuffle',options,distribution:exam.distribution||{mode:'original'}},random);
 if(kind==='shuffle'&&created.questions.length>1&&created.questions.every((q,i)=>q.id===exam.questions[i].id))created.questions.push(created.questions.shift());
 return {...created,folderPath:[...parent,`Set ${set}`],filters:exam.filters,selectionMode:kind==='unused'?'automatic':'shuffle',basedOn:exam.id};
}
