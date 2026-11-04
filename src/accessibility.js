// The renderer replaces screen markup; restore by stable control attributes rather
// than retaining detached nodes. Non-modal calculator windows do not trap focus.
const focusable='button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),summary,[tabindex="0"]';
function locator(el){
 if(!el?.getAttribute)return null;
 for(const name of ['data-font','data-surface','data-appearance-color','data-appearance-reset','data-app-zoom-size','data-app-zoom-reset','data-code-copy','data-code-search','data-code-filter','data-code-page','data-code-create','data-code-create-cancel','data-question-index','data-question-mark','data-question-note','data-question-summary','data-settings-section','data-calculator-expanded','data-calculator-resize','data-diagram-open','data-action','data-go','data-search','data-study-export','data-app-zoom-lock','data-calculator-options','data-calculator-minimize','name']){
  if(el.hasAttribute(name)){const selector=`[${name}=${JSON.stringify(el.getAttribute(name))}]`,label=el.getAttribute('aria-label');return label?selector+`[aria-label=${JSON.stringify(label)}]`:selector;}
 }
 return null;
}
export function createFocusManager(doc){
 let previousPage=null,previousOverlay=null,returnTo=null,focused=null,selection=null;
 doc.addEventListener('keydown',event=>{
  if(event.key!=='Tab')return;
  const modal=doc.querySelector('[aria-modal="true"]');if(!modal)return;
  const controls=[...modal.querySelectorAll(focusable)].filter(el=>!el.hidden&&el.getAttribute('aria-hidden')!=='true');
  const first=controls[0],last=controls.at(-1);
  if(!first){event.preventDefault();modal.focus();return;}
  if(!modal.contains(doc.activeElement)||(event.shiftKey&&doc.activeElement===first)){event.preventDefault();(event.shiftKey?last:first).focus();}
  else if(!event.shiftKey&&doc.activeElement===last){event.preventDefault();first.focus();}
 });
 return {
  beforeRender(page,overlay){
   focused=locator(doc.activeElement);selection=doc.activeElement?.selectionStart;
   if(overlay&&!previousOverlay)returnTo=focused;
  },
  afterRender(page,overlay){
   const modal=doc.querySelector('[aria-modal="true"]'),shell=doc.querySelector('.app-shell');
   if(shell)shell.inert=!!modal;
   if(modal){
    modal.setAttribute('tabindex','-1');
    if(!modal.hasAttribute('aria-label')&&!modal.hasAttribute('aria-labelledby')){
     const heading=modal.querySelector('h2,h1,h3');if(heading){heading.id='active-dialog-title';modal.setAttribute('aria-labelledby',heading.id);}
    }
   }
   let target;
   if(overlay!==previousOverlay&&modal)target=modal.querySelector(focusable)||modal;
   else if(!overlay&&previousOverlay&&returnTo){target=doc.querySelector(returnTo);returnTo=null;}
   else if(page!==previousPage){target=doc.querySelector('main h1')||doc.querySelector('main');if(target)target.setAttribute('tabindex','-1');}
   else if(focused)target=doc.querySelector(focused);
   if(target){target.focus?.({preventScroll:true});if(typeof selection==='number'&&target.setSelectionRange&&['text','search','tel','url','password'].includes(target.type))target.setSelectionRange(selection,selection);}
   previousPage=page;previousOverlay=overlay;
  }
 };
}
