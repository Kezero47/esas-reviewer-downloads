import {formulaCatalog} from './src/formula-catalog.js';
import {formulaPanel,formulaToggle} from './src/formula-cards.js';
import {calculatorView,pressCalculatorKey,calculatorControl,calculatorTouch,calculatorSelectMode,runCalculatorOperation,calculatorChooseEquation,clearCalculatorData} from './src/calculator-ui.js';
const all=Object.values(formulaCatalog),find=fn=>all.find(fn);
const examples=[
 ['Torsional stiffness',[find(f=>f.expression.includes('k_t'))]],
 ['Ideal gas — PV = nRT',[find(f=>f.symbols.some(s=>s.meaning.startsWith('Universal gas constant')))]],
 ['Multiple formulas',[find(f=>f.expression.includes('k_t')),find(f=>f.expression.includes('π')&&f.expression.includes('32'))]],
 ['Scientific constants',all.filter(f=>f.symbols.some(s=>/Avogadro|Boltzmann|Faraday|Stefan/.test(s.meaning)))],
 ['All formula cards',all]
].map(([label,formulas])=>[label,formulas.filter(Boolean)]);
let s={},open=true;const $=id=>document.getElementById(id);
$('sample').innerHTML=examples.map(([label],i)=>`<option value="${i}">${label}</option>`).join('');
function formulas(){const [name,items]=examples[Number($('sample').value)];$('subject').textContent=name;$('description').textContent=`${items.length} formula${items.length===1?'':'s'} in this example.`;$('toggle').innerHTML=formulaToggle(items,open);$('formulas').innerHTML=formulaPanel(items,open);}
function calc(){const focused=document.activeElement?.dataset?.key;$('calculator').innerHTML=calculatorView(s);$('mode').textContent=`${s.calcSettings.input} input · ${s.calcAngle} · ${s.calcMode}`;if(focused)[...$('calculator').querySelectorAll('[data-key]')].find(e=>e.dataset.key===focused)?.focus({preventScroll:true});}
$('sample').onchange=()=>{open=true;formulas();};$('theme').onclick=()=>document.body.dataset.theme=document.body.dataset.theme==='dark'?'light':'dark';
$('formulas').onclick=e=>{if(e.target.closest('[data-formula-close]')){open=false;formulas();$('toggle').querySelector('button')?.focus();}};$('toggle').onclick=()=>{open=!open;formulas();$('toggle').querySelector('button')?.focus();};
$('calculator').onclick=e=>{
 const b=e.target.closest('[data-key],[data-calc-control],[data-calc-touch-field],[data-calculator-type],[data-calc-select-mode],[data-calc-tool],[data-calc-op],[data-constant],[data-calc-equation],[data-calc-clear]');if(!b)return;const d=b.dataset;
 if(d.key)pressCalculatorKey(s,d.key);else if(d.calcControl)calculatorControl(s,d.calcControl);else if(d.calcTouchField)calculatorTouch(s,d.calcTouchField,d.calcTouchPos);else if(d.calculatorType!==undefined)s.calcTyping=!s.calcTyping;else if(d.calcSelectMode)calculatorSelectMode(s,d.calcSelectMode);else if(d.calcTool){s.calcTool=d.calcTool;s.calcPanel='tool';}else if(d.calcOp)runCalculatorOperation(s,d.calcOp);else if(d.constant){s.calcPanel='display';s.calcExpression+=d.constant;s.calcCursor=s.calcExpression.length;}else if(d.calcEquation)calculatorChooseEquation(s,d.calcEquation);else if(d.calcClear)clearCalculatorData(s,d.calcClear);calc();
};
$('calculator').oninput=e=>{const d=e.target.dataset;if(d.calculatorExpression!==undefined){s.calcTemplate=null;s.calcExpression=e.target.value;s.calcCursor=e.target.selectionStart;}else if(d.calcField)s.calcInputs[d.calcField]=e.target.value;};
$('fraction').onclick=()=>{s={};pressCalculatorKey(s,'a/b');pressCalculatorKey(s,'5');calculatorControl(s,'down');pressCalculatorKey(s,'2');calc();};
$('root').onclick=()=>{s={};for(const k of ['√(','√(','2','5','6'])pressCalculatorKey(s,k);calc();};$('clear').onclick=()=>{s={};calc();};
$('input-mode').onclick=()=>{s.calcSettings.input=s.calcSettings.input==='Line'?'Math':'Line';calc();};
function evaluate(){s.calcTemplate=null;s.calcExpression=$('expression').value;s.calcCursor=s.calcExpression.length;s.calcJustEvaluated=false;pressCalculatorKey(s,'=');calc();}
$('evaluate').onclick=evaluate;$('expression').onkeydown=e=>{if(e.key==='Enter')evaluate();};
document.addEventListener('keydown',e=>{if(['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName))return;const dirs={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'},keys={'Enter':'=','Backspace':'DEL','Escape':'CA','*':'×','/':'÷','-':'−'};if(dirs[e.key])calculatorControl(s,dirs[e.key]);else if(keys[e.key]||/^[0-9.+()]$/.test(e.key))pressCalculatorKey(s,keys[e.key]||e.key);else return;e.preventDefault();calc();});
formulas();calc();
