import {isScorableQuestion} from './quiz-engine.js';

// Non-ranked saved attempts only. Count answered items, never skipped/held items.
export function recommendedTopics(library,available,minimum=5){
 const live=new Map(available.filter(isScorableQuestion).map(q=>[q.id,q]));
 const rows=new Map(),seen=new Set();
 for(const entry of library){
  const session=entry.session;if(!session||(['ranked','tournament','recovery'].includes(session.mode)||session.originalMode==='ranked'))continue;
  const attemptId=session.attemptId||entry.id;if(seen.has(attemptId))continue;seen.add(attemptId);
  const result=entry.result,bank=new Map((result?.questions||session.questions||available).map(q=>[q.id,q]));
  const excluded=new Set((result?.excluded||[]).map(q=>q.id));
  for(const id of new Set(result?.scoredIds||session.ids||[])){
   const q=bank.get(id),answer=(result?.answers||session.answers)?.[id];
   if(!live.has(id)||excluded.has(id)||!isScorableQuestion(q)||!Number.isInteger(answer)||answer<0||answer>=q.choices.length)continue;
   const key=JSON.stringify([q.subject,q.topic]),row=rows.get(key)||{subject:q.subject,topic:q.topic,answered:0,incorrect:0};
   row.answered++;if(answer!==q.answer)row.incorrect++;rows.set(key,row);
  }
 }
 return [...rows.values()].filter(row=>row.answered>=minimum&&row.incorrect>0)
  .sort((a,b)=>b.incorrect/b.answered-a.incorrect/a.answered||b.answered-a.answered||a.subject.localeCompare(b.subject)||a.topic.localeCompare(b.topic));
}
