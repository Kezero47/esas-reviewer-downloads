import {choiceOrder,shuffleValues} from './quiz-engine.js';
export const quizId = () => globalThis.crypto?.randomUUID?.() || `quiz-${Date.now()}-${Math.random().toString(36).slice(2)}`;
export function migrateQuizLibrary(value, legacySession=null, legacyResult=null) {
  const entries=(Array.isArray(value)?value:[]).filter(x=>x?.id&&x.session?.ids?.length&&x.session.mode!=='ranked');
  const library=[...new Map(entries.map(x=>[x.id,x])).values()];
  if(legacySession?.ids?.length&&legacySession.mode!=='ranked'&&!library.some(x=>x.id===legacySession.libraryId||JSON.stringify(x.session.ids)===JSON.stringify(legacySession.ids))){const id=legacySession.libraryId||quizId();library.push({id,createdAt:legacySession.startedAt||Date.now(),status:'Paused',session:{...legacySession,libraryId:id}});}
  if(legacyResult?.ids?.length&&legacyResult.mode!=='ranked'&&!library.some(x=>x.result?.finishedAt===legacyResult.finishedAt)){const id=quizId();library.push({id,createdAt:legacyResult.finishedAt||Date.now(),status:'Completed',session:{...legacyResult,libraryId:id,category:'Previous quiz'},result:legacyResult});}
  return library;
}
export function saveLibrarySession(library, session, result=null) {
  if(!session||session.mode==='ranked')return library;
  const id=session.libraryId||quizId(),previous=library.find(x=>x.id===id);
  const entry={...previous,id,createdAt:previous?.createdAt||Date.now(),updatedAt:Date.now(),status:result?'Completed':'Paused',session:{...session,libraryId:id},...(result?{result}:{})};
  return [entry,...library.filter(x=>x.id!==id)];
}
export function wrongAnswerIds(questions,result) {
  if(!result||result.mode==='ranked')return [];
  const byId=new Map((result.questions||questions).map(q=>[q.id,q])),available=new Set(questions.map(q=>q.id)),excluded=new Set((result.excluded||[]).map(q=>q.id));
  return [...new Set(result.ids)].filter(id=>{const q=byId.get(id);return available.has(id)&&!excluded.has(id)&&q&&result.answers?.[id]!==undefined&&result.answers[id]!==q.answer;});
}
export function createWrongAnswerRetry(questions,result) {
  const ids=wrongAnswerIds(questions,result);if(!ids.length)return null;
  return {libraryId:quizId(),ids,choiceOrders:Object.fromEntries(ids.map(id=>[id,result.choiceOrders?.[id]||[0,1,2,3]])),answers:{},index:0,category:'Retry wrong answers',mode:'retry',practice:true,timer:false,elapsedMs:0,segmentStartedAt:Date.now(),startedAt:null};
}

export function createExamRetry(questions,result,shuffle=false) {
  if(!result || result.mode==='ranked')return null;
  const pool=new Map(questions.map(q=>[q.id,q]));
  let ids=result.ids.filter(id=>pool.has(id));if(!ids.length)return null;
  if(shuffle)ids=shuffleValues(ids);
  return {...createWrongAnswerRetry(questions,{...result,answers:Object.fromEntries(ids.map(id=>[id,-1]))}),ids,
    choiceOrders:Object.fromEntries(ids.map(id=>[id,shuffle?choiceOrder(pool.get(id)):result.choiceOrders?.[id]||[0,1,2,3]])),category:shuffle?'Retry and shuffle':'Retry exam'};
}

// Read-only backup recoveries must not permanently reserve the live question pool.
export function reservedQuestionIds(library,now=Date.now()) {
  return new Set(library.filter(entry=>entry.status!=='Completed'&&entry.session?.mode!=='retry'
    &&entry.session?.mode!=='recovery'&&entry.session?.originalMode!=='ranked'&&!entry.session?.recoveryExpired
    &&!(entry.session?.recovered&&entry.session?.deadlineAt&&entry.session.deadlineAt<=now))
    .flatMap(entry=>entry.session?.ids||[]));
}
