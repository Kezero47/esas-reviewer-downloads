import {filterQuizQuestions,shuffleValues} from './quiz-engine.js';

export function normalizeQuizCount(value,available){
  const maximum=Math.max(0,Math.floor(Number(available)||0));
  if(!maximum)return 0;
  const parsed=Math.floor(Number(value));
  if(!Number.isFinite(parsed)||parsed<1)return Math.min(5,maximum);
  return Math.min(parsed,maximum);
}

export function quizPoolKey(setup){
  const subjectValue=setup.subjects??(setup.subject&&setup.subject!=='all'?[setup.subject]:[]);
  const sourceValue=setup.sources??(setup.source&&setup.source!=='all'?[setup.source]:[]);
  const subjects=(Array.isArray(subjectValue)?subjectValue:[subjectValue]).filter(Boolean).sort();
  const sources=(Array.isArray(sourceValue)?sourceValue:[sourceValue]).filter(Boolean).sort();
  return JSON.stringify({subjects,sources,type:setup.type||'All'});
}

const stringIds=value=>Array.isArray(value)?[...new Set(value.filter(id=>typeof id==='string'&&id))]:[];

export function migrateQuizCycles(value){
  if(!value||typeof value!=='object'||Array.isArray(value))return {};
  return Object.fromEntries(Object.entries(value).map(([key,entry])=>[
    key,{completedIds:stringIds(Array.isArray(entry)?entry:entry?.completedIds),cycle:Math.max(1,Number(entry?.cycle)||1)}
  ]));
}

export function createNoRepeatQuizSelection(questions,setup,cycles={},random=Math.random){
  const matches=filterQuizQuestions(questions,setup),key=quizPoolKey(setup);
  const entry=migrateQuizCycles(cycles)[key]||{completedIds:[],cycle:1};
  const eligibleIds=new Set(matches.map(question=>question.id));
  const completed=new Set(entry.completedIds.filter(id=>eligibleIds.has(id)));
  const unanswered=matches.filter(question=>!completed.has(question.id));
  const ordered=setup.random===false?unanswered:shuffleValues(unanswered,random);
  const ids=ordered.slice(0,normalizeQuizCount(setup.count,ordered.length)).map(question=>question.id);
  const choiceOrders=Object.fromEntries(ids.map(id=>[id,setup.shuffleChoices?shuffleValues([0,1,2,3],random):[0,1,2,3]]));
  return {key,ids,choiceOrders,available:matches.length,remaining:unanswered.length,exhausted:unanswered.length===0,cycle:entry.cycle};
}

export function completeQuizCycle(cycles,key,answeredIds){
  const migrated=migrateQuizCycles(cycles),entry=migrated[key]||{completedIds:[],cycle:1};
  migrated[key]={...entry,completedIds:stringIds([...entry.completedIds,...answeredIds])};
  return migrated;
}

export function resetQuizCycle(cycles,key){
  const migrated=migrateQuizCycles(cycles),previous=migrated[key]||{cycle:1};
  migrated[key]={completedIds:[],cycle:previous.cycle+1};
  return migrated;
}

const blankSubjectProgress=()=>({answers:{},completedIds:[],correct:0,total:0,seconds:0,bestSeconds:null,attempts:0});

export function migrateRankProgress(value,availableSubjectIds=[]){
  const input=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
  const legacySubjects=input.subjects&&typeof input.subjects==='object'?input.subjects:input;
  const subjectIds=new Set([...availableSubjectIds,...Object.keys(legacySubjects||{}).filter(id=>id!=='version')]);
  const migrated={version:2,subjects:{}};
  for(const subjectId of subjectIds){
    const source=legacySubjects?.[subjectId],raw=source&&typeof source==='object'&&!Array.isArray(source)?source:{};
    const rawAnswers=raw.answers&&typeof raw.answers==='object'&&!Array.isArray(raw.answers)?raw.answers:{},answers={};
    for(const [id,answer] of Object.entries(rawAnswers)){
      if(typeof id==='string'&&(answer===true||answer===false))answers[id]=answer;
      else if(typeof id==='string'&&answer&&typeof answer==='object'&&typeof answer.correct==='boolean')answers[id]=!!answer.correct;
    }
    const completedIds=stringIds([...Object.keys(answers),...stringIds(raw.completedIds)]),correct=completedIds.filter(id=>answers[id]===true).length;
    migrated.subjects[subjectId]={...blankSubjectProgress(),answers,completedIds,correct,total:completedIds.length,seconds:Math.max(0,Math.floor(Number(raw.seconds)||0)),bestSeconds:Number(raw.bestSeconds)>0?Math.floor(Number(raw.bestSeconds)):null,attempts:Math.max(0,Math.floor(Number(raw.attempts)||0))};
  }
  return migrated;
}

export function createRankedSelection(questions,subjectId,progress,count=20,random=Math.random){
  const subjectQuestions=questions.filter(question=>question.subject===subjectId),migrated=migrateRankProgress(progress,[subjectId]);
  const completed=new Set(migrated.subjects[subjectId].completedIds);
  const unanswered=shuffleValues(subjectQuestions.filter(question=>!completed.has(question.id)),random);
  const previous=shuffleValues(subjectQuestions.filter(question=>completed.has(question.id)),random),ordered=unanswered.length?unanswered:previous;
  const ids=ordered.slice(0,normalizeQuizCount(count,ordered.length)).map(question=>question.id);
  return {ids,choiceOrders:Object.fromEntries(ids.map(id=>[id,shuffleValues([0,1,2,3],random)])),unansweredAvailable:unanswered.length,subjectTotal:subjectQuestions.length};
}

export function recordRankedAttempt(progress,questions,attempt){
  const migrated=migrateRankProgress(progress,[attempt.subjectId]),current=migrated.subjects[attempt.subjectId]||blankSubjectProgress();
  const byId=new Map(questions.map(question=>[question.id,question])),answers={...current.answers};let newlyCompleted=0;
  for(const id of stringIds(attempt.ids)){
    if(Object.hasOwn(answers,id)||attempt.answers?.[id]===undefined)continue;
    const question=byId.get(id);if(!question||question.subject!==attempt.subjectId)continue;
    answers[id]=attempt.answers[id]===question.answer;newlyCompleted++;
  }
  const completedIds=Object.keys(answers),correct=completedIds.filter(id=>answers[id]).length,seconds=Math.max(0,Math.floor(Number(attempt.seconds)||0));
  migrated.subjects[attempt.subjectId]={answers,completedIds,correct,total:completedIds.length,seconds:current.seconds+(newlyCompleted?seconds:0),bestSeconds:newlyCompleted?Math.min(current.bestSeconds||Number.MAX_SAFE_INTEGER,seconds):current.bestSeconds,attempts:current.attempts+(newlyCompleted?1:0)};
  return migrated;
}

export function rankForAccuracy(percent){return percent>=99?'SSS':percent>=95?'SS':percent>=90?'S':percent>=80?'A':percent>=70?'B':percent>=60?'C':percent>=50?'D':'E'}

export function rankMinimumUnique(available){
  const count=Math.max(0,Math.floor(Number(available)||0));
  return count?Math.min(20,count):0;
}

export function rankSummary(progress,subjectTotals={}){
  const migrated=migrateRankProgress(progress,Object.keys(subjectTotals));
  const subjects=Object.fromEntries(Object.keys(subjectTotals).map(id=>{
    const item=migrated.subjects[id]||blankSubjectProgress(),available=Math.max(0,Number(subjectTotals[id])||0),accuracy=item.total?item.correct/item.total*100:0;
    const minimumUnique=rankMinimumUnique(available),coverage=available?item.total/available*100:0;
    return [id,{...item,available,accuracy,coverage,minimumUnique,eligible:minimumUnique>0&&item.total>=minimumUnique,rank:rankForAccuracy(accuracy)}];
  }));
  const subjectValues=Object.values(subjects);
  const aggregate=subjectValues.reduce((sum,item)=>({correct:sum.correct+item.correct,total:sum.total+item.total,available:sum.available+item.available,seconds:sum.seconds+item.seconds,bestSeconds:sum.bestSeconds+(item.bestSeconds||0),attempts:sum.attempts+item.attempts,minimumUnique:sum.minimumUnique+item.minimumUnique}),{correct:0,total:0,available:0,seconds:0,bestSeconds:0,attempts:0,minimumUnique:0});
  const accuracy=subjectValues.length?subjectValues.reduce((sum,item)=>sum+item.accuracy,0)/subjectValues.length:0;
  const coverage=subjectValues.length?subjectValues.reduce((sum,item)=>sum+item.coverage,0)/subjectValues.length:0;
  const eligible=subjectValues.length>0&&subjectValues.every(item=>item.eligible);
  return {subjects,overall:{...aggregate,accuracy,coverage,eligible,rank:rankForAccuracy(accuracy)}};
}

export function compareRankEntries(a,b){
  const accuracy=Number(b.accuracy??b.bestPercent??0)-Number(a.accuracy??a.bestPercent??0);if(accuracy)return accuracy;
  const coverage=Number(b.completedUnique??b.total??0)-Number(a.completedUnique??a.total??0);if(coverage)return coverage;
  const time=Number(a.bestSeconds??a.seconds??Number.MAX_SAFE_INTEGER)-Number(b.bestSeconds??b.seconds??Number.MAX_SAFE_INTEGER);if(time)return time;
  return String(a.name||'').localeCompare(String(b.name||''));
}
