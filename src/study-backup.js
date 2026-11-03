import {STUDY_KEYS,validStudyData} from './study-store.js';
import {normalizeExamPath} from './exam-workspace.js';
export const MAX_BACKUP_BYTES=20*1024*1024;
const obj=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const text=v=>typeof v==='string';
const finite=v=>Number.isFinite(v)&&v>=0;
const fail=message=>{throw Error(message);};
function checkTree(value,depth=0){
 if(depth>32)fail('Backup nesting is too deep.');
 if(value&&typeof value==='object')for(const [key,item] of Object.entries(value)){
  if(['__proto__','constructor','prototype','toString','valueOf'].includes(key))fail('Unsafe backup field.');checkTree(item,depth+1);
 }
}
const canonical=v=>JSON.stringify(v,(_,value)=>obj(value)?Object.fromEntries(Object.keys(value).sort().map(k=>[k,value[k]])):value);
function dedupe(rows,name,idKey='id'){
 const found=new Map();for(const row of rows){if(!obj(row)||!text(row[idKey])||!row[idKey])fail(`Invalid ${name} ID.`);
  if(found.has(row[idKey])&&canonical(found.get(row[idKey]))!==canonical(row))fail(`Conflicting ${name} ID: ${row[idKey]}`);found.set(row[idKey],row);
 }return [...found.values()];
}
function question(q){
 if(!obj(q)||!text(q.id)||!text(q.prompt)||!Array.isArray(q.choices)||q.choices.length!==4||!q.choices.every(text)||!(q.answer===null||(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4)))fail('Invalid saved question snapshot.');
 for(const key of ['subject','topic','sourceId','type','quality','explanation','formula','sourceNote','answerSource','sourceTitle','diagramDescription'])if(q[key]!==undefined&&!text(q[key]))fail('Invalid snapshot text.');
 if(q.assets!==undefined&&(!Array.isArray(q.assets)||!q.assets.every(text)))fail('Invalid diagram references.');
}
function session(s){
 if(!obj(s)||!Array.isArray(s.ids)||!s.ids.length||!s.ids.every(text)||new Set(s.ids).size!==s.ids.length||!obj(s.answers)||!Number.isInteger(s.index)||s.index<0||s.index>=s.ids.length)fail('Invalid saved attempt.');
 for(const [id,answer] of Object.entries(s.answers))if(!s.ids.includes(id)||!Number.isInteger(answer)||answer<0||answer>3)fail('Invalid saved answer.');
 for(const key of ['mode','originalMode','category','libraryId','attemptId'])if(s[key]!==undefined&&!text(s[key]))fail('Invalid attempt text.');
 for(const key of ['reviewMarks','subjects','sources'])if(s[key]!==undefined&&(!Array.isArray(s[key])||!s[key].every(text)))fail('Invalid attempt list.');
 if(s.questions!==undefined){if(!Array.isArray(s.questions))fail('Invalid snapshots.');s.questions.forEach(question);if(new Set(s.questions.map(q=>q.id)).size!==s.questions.length)fail('Duplicate question snapshot.');}
 if(s.choiceOrders!==undefined){if(!obj(s.choiceOrders))fail('Invalid choice order.');for(const order of Object.values(s.choiceOrders))if(!Array.isArray(order)||order.length!==4||new Set(order).size!==4||order.some(n=>!Number.isInteger(n)||n<0||n>3))fail('Invalid choice order.');}
 for(const key of ['deadlineAt','elapsedMs','startedAt','segmentStartedAt'])if(s[key]!=null&&!finite(s[key]))fail('Invalid attempt timing.');
}
function result(r){
 if(!obj(r)||!Array.isArray(r.ids)||!r.ids.every(text)||!obj(r.answers)||!Number.isInteger(r.correct)||!Number.isInteger(r.total)||r.correct<0||r.total<r.correct)fail('Invalid saved result.');
 if(r.scoredIds!==undefined&&(!Array.isArray(r.scoredIds)||!r.scoredIds.every(text)))fail('Invalid scored IDs.');
 if(r.excluded!==undefined&&(!Array.isArray(r.excluded)||r.excluded.some(x=>!obj(x)||!text(x.id)||!text(x.reason))))fail('Invalid scoring exclusions.');
 if(r.questions!==undefined){if(!Array.isArray(r.questions))fail('Invalid result snapshots.');r.questions.forEach(question);}
 for(const answer of Object.values(r.answers))if(!Number.isInteger(answer)||answer<0||answer>3)fail('Invalid result answer.');
}
function draft(d){
 if(d==null)return;if(!obj(d)||!obj(d.values)||!text(d.uid)||(d.id!==null&&!text(d.id)))fail('Invalid note draft.');
 for(const key of ['title','body','formula','folder','questionId','questionExcerpt'])if(d.values[key]!==undefined&&!text(d.values[key]))fail('Invalid note draft fields.');
 if(d.values.pinned!==undefined&&typeof d.values.pinned!=='boolean')fail('Invalid draft pin.');
}
function exams(value){
 const rows=value==null?[]:typeof value==='string'?JSON.parse(value):value;if(!Array.isArray(rows))fail('Invalid printable exam library.');
 for(const row of rows){if(!obj(row)||!obj(row.options)||!Array.isArray(row.questions))fail('Invalid printable exam.');if(Object.values(row.options).some(v=>v!==null&&!text(v)&&typeof v!=='boolean'&&!Number.isFinite(v)))fail('Invalid exam options.');row.questions.forEach(question);if(row.folderPath)normalizeExamPath(row.folderPath);}
 return dedupe(rows,'exam');
}
function folders(value){
 const rows=value==null?[]:typeof value==='string'?JSON.parse(value):value;if(!Array.isArray(rows))fail('Invalid exam folders.');return [...new Map(rows.map(path=>{if(!Array.isArray(path)||!path.every(text))fail('Invalid folder path.');const p=normalizeExamPath(path);return [JSON.stringify(p),p];})).values()];
}
export function parseStudyBackup(raw,uid,bank=[],now=Date.now()){
 if(!uid)fail('Sign in before restoring.');if(!text(raw)||new TextEncoder().encode(raw).length>MAX_BACKUP_BYTES)fail('Choose a JSON backup no larger than 20 MiB.');
 const backup=JSON.parse(raw);checkTree(backup);
 if(!obj(backup)||backup.version!==1)fail('Unsupported backup version.');if(backup.uid!==uid)fail('This backup belongs to a different account.');if(!validStudyData(backup.data))fail('Invalid study backup.');
 const data=Object.fromEntries(Object.entries(backup.data).filter(([key])=>STUDY_KEYS.has(key)&&key!=='profileDetails'));
 for(const key of ['notes','quizLibrary'])if(data[key])data[key]=dedupe(data[key],key);
 for(const n of data.notes||[])if(!text(n.title)||!text(n.body)||(n.formula!==undefined&&!text(n.formula))||(n.folder!==undefined&&!text(n.folder))||(n.pinned!==undefined&&typeof n.pinned!=='boolean')||(n.questionId!==undefined&&!text(n.questionId))||(n.questionExcerpt!==undefined&&!text(n.questionExcerpt)))fail('Invalid saved note.');
 for(const key of ['bookmarks','customSourceFolders'])if(data[key]&&!data[key].every(text))fail('Invalid saved list.');
 for(const item of data.lessonBookmarks||[])if(!obj(item)||!text(item.key)||!text(item.topic)||!text(item.subject))fail('Invalid saved topic.');
 if(data.session)session(data.session);if(data.lastResult)result(data.lastResult);
 for(const entry of data.quizLibrary||[]){session(entry.session);if(!['Paused','Completed','Active'].includes(entry.status))fail('Invalid attempt status.');if(entry.result)result(entry.result);}
 if(data.quizHistory)data.quizHistory=dedupe(data.quizHistory.map(r=>({...r,attemptId:r.attemptId||r.id||`legacy-${r.finishedAt}-${r.category||''}`})),'history','attemptId');
 for(const r of data.quizHistory||[])if(!finite(r.correct)||!finite(r.total)||r.correct>r.total||!finite(r.finishedAt))fail('Invalid history summary.');
 draft(data.noteDraft);if(data.noteDraft&&data.noteDraft.uid!==uid)fail('Draft belongs to another account.');
 if(data.ocrDraft!=null&&(!obj(data.ocrDraft)||!text(data.ocrDraft.text)||!finite(data.ocrDraft.updatedAt)))fail('Invalid OCR draft.');
 for(const row of Object.values(data.topicStats||{}))if(!obj(row)||!finite(row.attempts)||!finite(row.correct)||row.correct>row.attempts)fail('Invalid topic progress.');
 if(data.rankProgress&&(!obj(data.rankProgress.subjects)||![1,2].includes(data.rankProgress.version)))fail('Invalid local rank schema.');
 for(const row of Object.values(data.rankProgress?.subjects||{}))if(!obj(row)||!Array.isArray(row.completedIds)||!row.completedIds.every(text)||!obj(row.answers)||Object.values(row.answers).some(v=>typeof v!=='boolean'))fail('Invalid local rank progress.');
 for(const s of Object.values(data.rankSessions||{}))session(s);
 for(const row of Object.values(data.quizCycles||{}))if(!obj(row)||!Array.isArray(row.completedIds)||!row.completedIds.every(text))fail('Invalid completion cycle.');
 if(backup.unsavedSession){session(backup.unsavedSession);data.session=backup.unsavedSession;}
 // Restored sessions are recovery records; never auto-submit or grant rank rewards.
 const recovery=s=>{if(!s)return s;const expired=!!s.recoveryExpired||!!s.deadlineAt&&s.deadlineAt<=now;return {...s,...(s.mode==='ranked'?{mode:'recovery',originalMode:'ranked'}:{}),recovered:true,recoveryExpired:expired,segmentStartedAt:null,startedAt:null};};
 const rankedRecoveries=Object.entries(data.rankSessions||{}).map(([subject,s])=>{const id=s.libraryId||s.attemptId||`ranked-recovery-${subject}`;return {id,status:'Paused',createdAt:now,session:{...recovery({...s,mode:'ranked'}),libraryId:id}};});
 data.session=recovery(data.session);data.rankSessions={};
 data.quizLibrary=(data.quizLibrary||[]).map(entry=>entry.status==='Completed'?entry:{...entry,status:'Paused',session:recovery(entry.session)});
 for(const row of rankedRecoveries){const existing=data.quizLibrary.find(x=>x.id===row.id);if(existing)fail('Conflicting ranked recovery ID.');data.quizLibrary.push(row);}
 if(data.session){const id=data.session.libraryId||data.session.attemptId||'restored-session';data.session.libraryId=id;const existing=data.quizLibrary.find(x=>x.id===id);if(existing?.status==='Completed')fail('Recovery session conflicts with a completed attempt.');data.quizLibrary=[...data.quizLibrary.filter(x=>x.id!==id),{id,status:'Paused',session:data.session,createdAt:now}];}
 data.restoredExamLibrary=exams(backup.printableExams??data.restoredExamLibrary);
 data.restoredExamFolders=folders(backup.examFolders??data.restoredExamFolders);
 const known=new Set(bank.map(q=>q.id));const refs=new Set([...(data.bookmarks||[]),...(data.quizLibrary||[]).flatMap(x=>x.session.ids)]);
 return {uid,data,summary:{notes:data.notes?.length||0,attempts:data.quizLibrary.length,exams:data.restoredExamLibrary.length,folders:data.restoredExamFolders.length,unavailable:[...refs].filter(id=>!known.has(id)).length,expired:data.quizLibrary.filter(x=>x.session.recoveryExpired).length},excluded:['Account profile','Authentication','Purchases and entitlements','Server rankings and rewards']};
}
export function emptyStudyProfile(data){
 for(const key of ['notes','bookmarks','lessonBookmarks','quizLibrary','quizHistory','restoredExamLibrary','restoredExamFolders','customSourceFolders'])if(data[key]?.length)return false;
 if(data.session||data.lastResult||data.noteDraft||data.ocrDraft?.text)return false;
 if(Object.values(data.topicStats||{}).some(x=>x.attempts>0))return false;
 if(Object.values(data.rankProgress?.subjects||{}).some(x=>x.completedIds?.length||Object.keys(x.answers||{}).length||x.seconds>0))return false;
 if(Object.keys(data.rankSessions||{}).length||Object.values(data.quizCycles||{}).some(x=>x.completedIds?.length))return false;
 return true;
}
export function examStorageAdapter(store,storage,uid){
 const fields=new Map([[`esas.examLibrary.${uid}`,'restoredExamLibrary'],[`esas.examFolders.${uid}`,'restoredExamFolders']]);
 return {getItem(key){const name=fields.get(key);const value=name?store.get(name,null):null;return value!==null?JSON.stringify(value):storage.getItem(key);},setItem(key,value){const name=fields.get(key);if(name&&store.get(name,null)!==null){if(!store.update({[name]:JSON.parse(value)}))throw Error('Exam changes could not be saved.');}else storage.setItem(key,value);}};
}
export function restoreStudyBackup(store,storage,preview,uid){
 if(preview.uid!==uid||store.status().uid!==uid)fail('The signed-in account changed. Select the backup again.');
 const current=JSON.parse(store.export()).data;
 const adapter=examStorageAdapter(store,storage,uid);
 if(!emptyStudyProfile(current)||JSON.parse(adapter.getItem(`esas.examLibrary.${uid}`)||'[]').length||JSON.parse(adapter.getItem(`esas.examFolders.${uid}`)||'[]').length)fail('Restore requires an empty local study profile.');
 if(!store.restore(preview.data))fail('Backup could not be restored. Existing data is unchanged.');
 return preview.summary;
}
