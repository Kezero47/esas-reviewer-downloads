const identity=value=>value;

export function normalizeSelectedSubjects(value,availableSubjectIds=[]){
  const allowed=new Set(availableSubjectIds);
  const requested=Array.isArray(value)?value:value&&value!=='all'?[value]:availableSubjectIds;
  return [...new Set(requested)].filter(id=>allowed.has(id));
}

export function normalizeSelectedSources(value,availableSourceIds=[]){
  const allowed=new Set(availableSourceIds);
  const requested=Array.isArray(value)?value:value&&value!=='all'?[value]:availableSourceIds;
  return [...new Set(requested)].filter(id=>allowed.has(id));
}

export function sourceIdsForSubjects(questions,selectedSubjects=[]){
  const selected=new Set(selectedSubjects);
  return [...new Set(questions
    .filter(question=>selected.has(question.subject))
    .map(question=>question.sourceId))];
}

export function reconcileSelectedSources(value,availableSourceIds=[]){
  const selected=normalizeSelectedSources(value,availableSourceIds);
  return selected.length?selected:[...availableSourceIds];
}

export function filterQuizQuestions(questions,setup){
  const availableSubjectIds=[...new Set(questions.map(question=>question.subject))];
  const availableSourceIds=[...new Set(questions.map(question=>question.sourceId))];
  const selectedSubjects=normalizeSelectedSubjects(setup.subjects??setup.subject,availableSubjectIds);
  const selectedSources=normalizeSelectedSources(setup.sources??setup.source,availableSourceIds);
  const selected=new Set(selectedSubjects);
  const sources=new Set(selectedSources);
  return questions.filter(question=>
    selected.has(question.subject)
    &&sources.has(question.sourceId)
    &&(setup.type==='All'||question.type===setup.type)
  );
}

export function shuffleValues(values,random=Math.random){
  const output=[...values];
  for(let index=output.length-1;index>0;index--){
    const swapIndex=Math.floor(random()*(index+1));
    [output[index],output[swapIndex]]=[output[swapIndex],output[index]];
  }
  return output;
}

export function createQuizSelection(questions,setup,random=Math.random){
  let matches=filterQuizQuestions(questions,setup);
  if(setup.random)matches=shuffleValues(matches,random);
  const ids=matches.slice(0,Number(setup.count)).map(question=>question.id);
  const choiceOrders=Object.fromEntries(ids.map(id=>[
    id,
    setup.shuffleChoices?shuffleValues([0,1,2,3],random):[0,1,2,3]
  ]));
  return {ids,choiceOrders};
}

export function scoreQuiz(questions,ids,answers){
  const byId=new Map(questions.map(question=>[question.id,question]));
  const subjectStats={};
  const topicStats={};
  let correct=0;
  for(const id of ids){
    const question=byId.get(id);
    if(!question)continue;
    const isCorrect=answers[id]===question.answer;
    if(isCorrect)correct++;
    const subject=subjectStats[question.subject]??={attempts:0,correct:0};
    subject.attempts++;
    if(isCorrect)subject.correct++;
    const topicKey=`${question.subject} / ${question.topic}`;
    const topic=topicStats[topicKey]??={attempts:0,correct:0};
    topic.attempts++;
    if(isCorrect)topic.correct++;
  }
  return {correct,total:ids.length,subjectStats,topicStats};
}

export function displayedAnswerLetter(choiceOrder,originalChoiceIndex){
  const displayedIndex=(choiceOrder??[0,1,2,3]).indexOf(originalChoiceIndex);
  return displayedIndex<0?'?':'ABCD'[displayedIndex];
}

export function practiceChoiceState(originalChoiceIndex,selectedAnswer,correctAnswer,practiceMode=true){
  if(!practiceMode||selectedAnswer===undefined)return originalChoiceIndex===selectedAnswer?'selected':'';
  if(originalChoiceIndex===correctAnswer)return 'correct';
  if(originalChoiceIndex===selectedAnswer)return 'incorrect';
  return '';
}
