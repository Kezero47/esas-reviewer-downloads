import {ownerExamSources} from './owner-exam-sources.js';
import {importedQuestions} from './imported-questions.js';

export function splitLawsSubject(question){
  if(question.subject==='pec'||question.topic==='Philippine Electrical Code')return {...question,subject:'pec'};
  if(['ethics','contracts','ethics-contracts'].includes(question.subject)||
      question.topic==='IIEE & Electrical Engineering Code of Ethics'||
      question.topic==='Contracts, Obligation and Specification'){
    return {...question,subject:'ethics-contracts'};
  }
  return question;
}

export const questionBank = importedQuestions.map(splitLawsSubject);
export const playableQuestions = questionBank.filter(q=>q.quality==='ready');
let publishedQuestionIds=new Set();
export const subjects = [
  { id:'chemistry', name:'Chemistry/Engineering Materials', icon:'⚗', color:'amber', topics:['Chemistry and materials'] },
  { id:'fluids', name:'Fluid Mechanics', icon:'◉', color:'cyan', topics:['Fluid Statics','Fluid Dynamics','Fluid mechanics terminology','Fluid Mechanics','Fluid Mechanics — Statics & Dynamics'] },
  { id:'management', name:'Engineering Management', icon:'▦', color:'violet', topics:['Engineering Management'] },
  { id:'economics', name:'Engineering Economics', icon:'₱', color:'green', topics:['Engineering Economics'] },
  { id:'safety', name:'Occupational Safety and Health', icon:'⌁', color:'amber', topics:['Occupational Safety and Health'] },
  { id:'strength', name:'Strength of Materials', icon:'⬡', color:'coral', topics:['Strength of Materials'] },
  { id:'math', name:'Engineering Mathematics', icon:'∑', color:'blue', topics:['Algebra & Trigonometry','Calculus','Differential Equations'] },
  { id:'mechanics', name:'Engineering Mechanics', icon:'⚙', color:'violet', topics:['Statics','Dynamics','Strength of Materials'] },
  { id:'physics', name:'Physics', icon:'✧', color:'cyan', topics:['Motion','Waves','Thermodynamics'] },
  { id:'pec', name:'Philippine Electrical Code (PEC)', icon:'§', color:'amber', topics:['Philippine Electrical Code'] },
  { id:'ethics-contracts', name:'IIEE & Electrical Engineering Code of Ethics, Contracts, Obligations and Specifications', icon:'⚖', color:'blue', topics:['IIEE & Electrical Engineering Code of Ethics','Contracts, Obligation and Specification'] },
  { id:'computers', name:'Computer Fundamentals and Programming', icon:'⌘', color:'blue', topics:['Computer Fundamentals and Programming'] },
  { id:'ee-laws', name:'Electrical Engineering Laws and Codes', icon:'§', color:'amber', topics:['Electrical Engineering Laws and Codes'] },
  { id:'thermo', name:'Thermodynamics', icon:'◉', color:'coral', topics:['Temperature','First Law','Cycles'] },
];

export function setPublishedQuestions(items=[]){
  for(let index=questionBank.length-1;index>=0;index--){
    if(publishedQuestionIds.has(questionBank[index].id))questionBank.splice(index,1);
  }
  const embeddedIds=new Set(importedQuestions.map(question=>question.id));
  const seen=new Set();
  const accepted=[];
  for(const question of Array.isArray(items)?items:[]){
    if(!question?.id||embeddedIds.has(question.id)||seen.has(question.id))continue;
    if(!Array.isArray(question.choices)||question.choices.length!==4)continue;
    const ready=question.quality==='ready';
    if(ready&&(!Number.isInteger(question.answer)||question.answer<0||question.answer>3))continue;
    if(!ready&&question.answer!==null&&question.answer!==undefined&&(!Number.isInteger(question.answer)||question.answer<0||question.answer>3))continue;
    seen.add(question.id);
    const normalized=splitLawsSubject(question);
    accepted.push(normalized);
    if(!sourceRegistry.some(s=>s.id===normalized.sourceId))sourceRegistry.push({id:normalized.sourceId,title:normalized.sourceFile||normalized.section||normalized.sourceId,fullTitle:normalized.sourceFile||normalized.section||normalized.sourceId,subjectIds:[normalized.subject],sourceType:'owner-import',sourceYear:normalized.sourceYear||'Undated',uploaderName:'Owner',uploadedAt:normalized.uploadedAt||'Not recorded',pages:0,status:'Owner-published questions',kind:'Owner import',folderPath:String(normalized.importFolder||'Owner imports').split('/').map(x=>x.trim()).filter(Boolean)});
    else{const source=sourceRegistry.find(s=>s.id===normalized.sourceId);if(!source.subjectIds.includes(normalized.subject))source.subjectIds.push(normalized.subject);}
    if(!subjects.some(item=>item.id===normalized.subject)){
      subjects.push({
        id:normalized.subject,
        name:normalized.subject==='ethics-contracts'?'IIEE & Electrical Engineering Code of Ethics, Contracts, Obligations and Specifications':normalized.subjectName||normalized.subject,
        icon:'✦',
        color:'violet',
        topics:[normalized.topic||'Imported questions']
      });
    }else{
      const item=subjects.find(subject=>subject.id===normalized.subject);
      if(normalized.topic&&!item.topics.includes(normalized.topic))item.topics.push(normalized.topic);
    }
  }
  publishedQuestionIds=new Set(accepted.map(question=>question.id));
  questionBank.push(...accepted);
  playableQuestions.splice(0,playableQuestions.length,...questionBank.filter(question=>question.quality==='ready'));
  return accepted.length;
}

// Original UI demonstration items. These are not transcriptions of uploaded examinations.
export const demoQuestions = [
  {id:'demo-1', subject:'math', topic:'Algebra & Trigonometry', difficulty:'Easy', type:'solving', prompt:'What is the value of 2³ + 4?', choices:['10','12','14','16'], answer:1, explanation:'2³ = 8, then 8 + 4 = 12.', formula:'Exponent before addition'},
  {id:'demo-2', subject:'mechanics', topic:'Statics', difficulty:'Easy', type:'terminology', prompt:'A body is in static equilibrium when the net force and net moment are:', choices:['Both zero','Both increasing','Equal to mass','Always positive'], answer:0, explanation:'Static equilibrium requires ΣF = 0 and ΣM = 0.', formula:'ΣF = 0; ΣM = 0'},
  {id:'demo-3', subject:'physics', topic:'Motion', difficulty:'Easy', type:'solving', prompt:'A body travels 20 m in 4 s at constant speed. What is its speed?', choices:['4 m/s','5 m/s','16 m/s','80 m/s'], answer:1, explanation:'Speed is distance divided by time: 20 m ÷ 4 s = 5 m/s.', formula:'v = d / t'},
  {id:'demo-4', subject:'circuits', topic:'DC Circuits', difficulty:'Easy', type:'solving', prompt:'A 12 V source is applied across a 4 Ω resistor. Find the current.', choices:['0.33 A','3 A','8 A','48 A'], answer:1, explanation:'By Ohm’s law, I = V/R = 12/4 = 3 A.', formula:'I = V / R'},
  {id:'demo-5', subject:'thermo', topic:'Temperature', difficulty:'Easy', type:'solving', prompt:'Convert 25 °C to kelvin using K = °C + 273.15.', choices:['248.15 K','273.15 K','298.15 K','318.15 K'], answer:2, explanation:'25 + 273.15 = 298.15 K.', formula:'K = °C + 273.15'}
];

export const sourceRegistry = [
  ...ownerExamSources,
  {id:'fluids-book',title:'Fluid Mechanics • Reference Book • Undated • Solving and Definitions',fullTitle:'ESAS Book: Fluid Mechanics Solving and Definitions',subjectIds:['fluids'],sourceType:'reference-book',sourceYear:'Undated',uploaderName:'Not recorded',uploadedAt:'Not recorded',pages:56,status:'79 scored questions imported · 1 held for a source inconsistency',kind:'Reference book'},
  {id:'fluids-terms',title:'Fluid Mechanics • Reference Book • Undated • Terminology',fullTitle:'ESAS Book: Fluid Mechanics Terminology',subjectIds:['fluids'],sourceType:'reference-book',sourceYear:'Undated',uploaderName:'Not recorded',uploadedAt:'Not recorded',pages:18,status:'100 terminology questions imported',kind:'Reference book'},
  {id:'past-2025-set-a',title:'Multiple ESAS Subjects • Past Exam • 2025 • RSU Set A',fullTitle:'RSU ESAS Past Exam 2025 Set A — Exams 17, 21, 25 and 27',subjectIds:['management','fluids','economics','safety','ethics-contracts','strength'],sourceType:'past-exam',sourceYear:'2025',uploaderName:'Kezero',uploadedAt:'2026-09-28',pages:0,status:'448 verified unique questions imported from Exams 17, 21, 25 and 27',kind:'Past exams'},
  {id:'past-2025-exam-16',title:'Fluid Mechanics & Ethics/Contracts • Past Exam • 2025 • RSU Exam 16 Set A',fullTitle:'Romblon State University — EE Correlation 2 — ESAS Exam 16 Set A',subjectIds:['fluids','ethics-contracts'],sourceType:'past-exam',sourceYear:'2025',uploaderName:'Kezero',uploadedAt:'2026-10-04',pages:10,status:'80 source records retained · 62 verified and playable · 18 held for review',kind:'Past exams'},
  {id:'past-2025-exam-14',title:'Fluid Mechanics & Ethics/Contracts • Past Exam • 2025 • RSU Exam 14 Set A',fullTitle:'Romblon State University — EE Correlation 2 — ESAS Exam 14 Set A',subjectIds:['fluids','ethics-contracts'],sourceType:'past-exam',sourceYear:'2025',uploaderName:'Kezero',uploadedAt:'2026-10-04',pages:10,status:'80 source records retained · 56 verified and playable · 24 held for review',kind:'Past exams'},
  {id:'owner-import',title:'Multiple ESAS Subjects • Owner Import • Undated • Approved JSONL',fullTitle:'Owner-approved JSONL imports',subjectIds:[],sourceType:'owner-import',sourceYear:'Undated',uploaderName:'Shown per approved import',uploadedAt:'Shown per approved import',pages:0,status:'Questions published through the verified owner workflow',kind:'Owner import'}
];

export const initialSubmissions = [
  {id:'sample-1', title:'Sample resource submission', category:'Reviewer', submittedBy:'Demo learner', status:'Pending', detail:'Demonstrates the review and approval interface. No source content is published.'}
];
