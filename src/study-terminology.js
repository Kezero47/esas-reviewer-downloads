import {glossaryEntries} from './terminology-data.js';
export const terminologyEntries=glossaryEntries;

const normalize=value=>String(value||'').normalize('NFKC').toLowerCase().replace(/[’']/g,"'").trim();
export function subjectTerms(subject,query=''){
 const terms=normalize(query).split(/\s+/).filter(Boolean);
 return terminologyEntries.filter(entry=>entry.subject===subject&&terms.every(term=>normalize(entry.term+' '+entry.meaning).includes(term)))
  .slice().sort((a,b)=>a.term.localeCompare(b.term,'en',{sensitivity:'base'}));
}
export function terminologyView(subjects,{subject='',query=''}={}){
 const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const ordered=subjects.filter(s=>subjectTerms(s.id).length).slice().sort((a,b)=>a.name.localeCompare(b.name,'en',{sensitivity:'base'}));
 const selected=ordered.find(s=>s.id===subject);
 if(!selected)return `<p class="small muted">Choose a subject to browse terms and their meanings, arranged A–Z.</p><div class="terminology-subjects">${ordered.map(s=>`<button class="action-row" data-terms-subject="${esc(s.id)}"><span class="grow"><strong>${esc(s.name)}</strong><small>${subjectTerms(s.id).length} terms · A–Z</small></span><span aria-hidden="true">›</span></button>`).join('')}</div>`;
 const rows=subjectTerms(selected.id,query),groups=[...new Set(rows.map(e=>e.term[0].toUpperCase()))];
 return `<button class="link-button" data-terms-subject="">← All subjects</button><h2 class="terminology-subject-title">${esc(selected.name)}</h2><form id="terminology-search-form" class="terminology-search"><label class="field">Find a term or meaning<input name="query" type="search" value="${esc(query)}" placeholder="Search this subject" maxlength="200"></label><div class="row"><button class="btn secondary" type="submit">Search</button>${query?'<button class="link-button" type="button" data-terms-clear>Clear search</button>':''}</div></form><p class="small muted" role="status">${rows.length} of ${subjectTerms(selected.id).length} terms · A–Z</p>${rows.length?groups.map(letter=>`<section class="terminology-letter" aria-label="${esc(letter)}"><h3>${esc(letter)}</h3><dl>${rows.filter(e=>e.term[0].toUpperCase()===letter).map(e=>`<div class="terminology-entry"><dt>${esc(e.term)}</dt><dd>${esc(e.meaning)}</dd></div>`).join('')}</dl></section>`).join(''):'<div class="glass empty"><h3>No matching terms</h3><p>Try another word or clear your search.</p></div>'}<p class="small muted">Concise study definitions. For legal or code requirements, consult the applicable official edition.</p>`;
}
