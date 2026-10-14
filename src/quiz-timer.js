export const TIMED_PRESETS=[
 {id:'terms40',type:'Terminology',count:40,minutes:60,label:'40 terms · 1 hour'},
 {id:'terms80',type:'Terminology',count:80,minutes:120,label:'80 terms · 2 hours'},
 {id:'solving20',type:'Solving',count:20,minutes:90,label:'20 solving · 1 hour 30 minutes'},
 {id:'solving40',type:'Solving',count:40,minutes:180,label:'40 solving · 3 hours'},
];
export const quizDurationMs=questions=>questions.reduce((ms,q)=>ms+(q.type==='Solving'?270000:90000),0);
export const quizRemainingMs=(session,now=Date.now())=>session?.deadlineAt?Math.max(0,session.deadlineAt-now):null;
export const quizExpired=(session,now=Date.now())=>!!session?.deadlineAt&&now>=session.deadlineAt;
export function countdown(ms){const seconds=Math.max(0,Math.ceil(ms/1000));return [Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(n=>String(n).padStart(2,'0')).join(':');}
