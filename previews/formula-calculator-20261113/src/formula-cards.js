import {scriptMarkup} from './math-format.js';
import {constantsForFormula} from './formula-constants.js';
import {formulaCatalog} from './formula-catalog.js';
import {formulaMappings} from './formula-mappings.js';
export const formulaFingerprint=q=>JSON.stringify([q.id,q.subject,q.type,q.prompt,q.choices,q.answer,q.formula||'',q.explanation||'']);
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function formulasForQuestion(q,session){
 if(!q||!session?.practice||session.mode==='ranked'||session.mode==='tournament'||session.recovered)return [];
 const mapping=formulaMappings[q.id];
 if(!mapping||mapping.fingerprint!==formulaFingerprint(q))return [];
 const formulas=mapping.formulaIds.map(id=>formulaCatalog[id]);
 return formulas.every(Boolean)?formulas:[];
}
// Semantic scripts work offline in Android WebViews as well as modern browsers.
export function expressionMarkup(expression){return `<span class="formula-math" role="math" aria-label="${esc(expression)}">${scriptMarkup(expression)}</span>`;}
const constantMarkup=f=>{const items=constantsForFormula(f);return items.length?`<div class="formula-constants"><strong>Constants</strong><ul>${items.map(c=>`<li>${scriptMarkup(c.symbol)} = ${scriptMarkup(c.value)}${c.note?`<small>${esc(c.note)}</small>`:''}</li>`).join('')}</ul><small>Use the value stated in the question when supplied.</small></div>`:'';};

export function formulaToggle(formulas,open){return formulas.length?`<button class="pill" data-formula-toggle aria-controls="question-formulas" aria-expanded="${open}">${open?'Hide formulas':'Reveal formula'}</button>`:'';}
export function formulaPanel(formulas,open){return formulas.length&&open?`<section id="question-formulas" class="glass pad formula-panel" aria-labelledby="formula-heading"><div class="row between"><h3 id="formula-heading">Formulas for this question</h3><button class="icon-btn" data-formula-close aria-label="Close formulas">×</button></div>${formulas.map((f,i)=>`<article class="formula-card"><span class="tag">FORMULA ${i+1}</span><div class="formula-expression">${expressionMarkup(f.expression)}</div><ul>${f.symbols.map(s=>`<li>${scriptMarkup(s.symbol)} = ${esc(s.meaning)} (${scriptMarkup(s.unit)})</li>`).join('')}</ul>${constantMarkup(f)}</article>`).join('')}</section>`:'';}
