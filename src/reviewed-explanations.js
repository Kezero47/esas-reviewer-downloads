// Only human-approved, snapshot-matching entries belong here. No approvals fabricated.
export const approvedExplanationEntries=[];
let snapshots=new Map(),generation=0;
export const questionFingerprint=q=>JSON.stringify({prompt:q.prompt,choices:q.choices,answer:q.answer});
export async function explanationHash(q){const bytes=await globalThis.crypto.subtle.digest('SHA-256',new TextEncoder().encode(questionFingerprint(q)));return [...new Uint8Array(bytes)].map(x=>x.toString(16).padStart(2,'0')).join('');}
export async function validateExplanation(entry,question){
 const nonempty=value=>typeof value==='string'&&value.trim().length>0;
 if(!entry||!question||entry.id!==question.id||entry.status!=='approved'||!['author','reviewer','explanation'].every(key=>nonempty(entry[key]))||!/^\d{4}-\d{2}-\d{2}$/.test(entry.reviewDate||'')||Number.isNaN(Date.parse(entry.reviewDate))||new Date(entry.reviewDate).toISOString().slice(0,10)!==entry.reviewDate||!Array.isArray(entry.references)||!entry.references.length||entry.references.some(r=>!r||!['title','edition','page'].every(key=>nonempty(r[key])))||(entry.formula!==undefined&&typeof entry.formula!=='string'))return false;
 return entry.snapshotHash===await explanationHash(question);
}
export async function loadReviewedExplanations(bank,entries=approvedExplanationEntries){
 const current=++generation,next=new Map(),byId=new Map(bank.map(q=>[q.id,q]));
 for(const entry of entries){const q=byId.get(entry?.id);if(await validateExplanation(entry,q))next.set(entry.id,{fingerprint:questionFingerprint(q),entry});}
 if(current===generation)snapshots=next;
}
export function reviewedExplanation(q){const saved=snapshots.get(q.id);return saved?.fingerprint===questionFingerprint(q)?saved.entry:null;}
