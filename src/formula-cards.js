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
// MathML is native, offline and escaped. Unicode preserves readability on older WebViews.
export function expressionMarkup(expression){
 // Preserve the exact expression: splitting a linear expression at '/' can change
 // grouping in sums and chained fractions. Unicode notation works offline too.
 return `<math xmlns="http://www.w3.org/1998/Math/MathML" aria-label="${esc(expression)}"><mtext>${esc(expression)}</mtext></math>`;
}

export function formulaToggle(formulas,open){return formulas.length?`<button class="pill" data-formula-toggle aria-controls="question-formulas" aria-expanded="${open}">${open?'Hide formulas':'Reveal formula'}</button>`:'';}
export function formulaPanel(formulas,open){return formulas.length&&open?`<section id="question-formulas" class="glass pad formula-panel" aria-labelledby="formula-heading"><div class="row between"><h3 id="formula-heading">Formulas for this question</h3><button class="icon-btn" data-formula-close aria-label="Close formulas">×</button></div>${formulas.map((f,i)=>`<article class="formula-card"><span class="tag">FORMULA ${i+1}</span><div class="formula-expression">${expressionMarkup(f.expression)}</div><ul>${f.symbols.map(s=>`<li>${esc(s.symbol)} = ${esc(s.meaning)} (${esc(s.unit)})</li>`).join('')}</ul></article>`).join('')}</section>`:'';}
