import {isAggregateChoice} from './quiz-engine.js';
const shuffle=(values,random)=>{const result=[...values];for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;};
export function answerDistribution(questions){return questions.reduce((counts,q)=>{counts[q.answer]++;return counts;},[0,0,0,0]);}
export function distributeAnswers(questions,{mode='original',counts=[]}={},random=Math.random){
 if(!['original','balanced','custom'].includes(mode))throw Error('Choose an answer-key distribution.');
 const meta=questions.map(q=>{if(q.choices.length!==4)throw Error('Answer distribution requires four choices per question.');const fixed=q.choices.map((c,i)=>isAggregateChoice(c)?i:-1).filter(i=>i>=0);if(fixed.length>1)throw Error(`Question ${q.id} has multiple “all/none of the above” choices; review it before generating a printable set.`);return {q,fixed:fixed[0]};});
 const forced=meta.filter(x=>x.fixed===x.q.answer).length,eligible=meta.filter(x=>x.fixed===undefined||x.fixed===x.q.answer).length;
 let targets;
 if(mode==='custom'){targets=counts.map(Number);if(targets.length!==4||targets.some(x=>!Number.isInteger(x)||x<0)||targets.reduce((a,b)=>a+b,0)!==questions.length)throw Error(`A, B, C and D counts must be whole numbers totaling ${questions.length}.`);if(targets[3]<forced||targets[3]>eligible)throw Error(`D needs between ${forced} and ${eligible} correct answers because “all/none of the above” must stay in D.`);}
 if(mode==='balanced'){targets=Array.from({length:4},(_,i)=>Math.floor(questions.length/4)+(i<questions.length%4?1:0));const d=Math.max(forced,Math.min(eligible,targets[3]));while(targets[3]<d){const i=[0,1,2].sort((a,b)=>targets[b]-targets[a])[0];targets[i]--;targets[3]++;}while(targets[3]>d){const i=[0,1,2].sort((a,b)=>targets[a]-targets[b])[0];targets[i]++;targets[3]--;}}
 const assigned=new Map();
 if(targets){const left=[...targets];for(const m of meta)if(m.fixed===m.q.answer){assigned.set(m,3);left[3]--;}
 for(const m of shuffle(meta.filter(m=>m.fixed===undefined),random).slice(0,left[3]))assigned.set(m,3);left[3]=0;
 const letters=shuffle(left.flatMap((n,i)=>Array(n).fill(i)),random);for(const m of meta)if(!assigned.has(m))assigned.set(m,letters.pop());}
 return meta.map(m=>{const {q,fixed}=m;let order;
 if(mode==='original'){order=q.choices.map((_,i)=>i);if(fixed!==undefined){order=order.filter(i=>i!==fixed);order.push(fixed);}}
 else{order=Array(4);order[assigned.get(m)]=q.answer;if(fixed!==undefined)order[3]=fixed;const remaining=shuffle(q.choices.map((_,i)=>i).filter(i=>i!==q.answer&&i!==fixed),random);for(let i=0;i<4;i++)if(order[i]===undefined)order[i]=remaining.shift();}
 return {...q,choices:order.map(i=>q.choices[i]),answer:order.indexOf(q.answer)};
 });
}
