export function floatingCalculatorLayout({width,height},size=100,position={}){
 const scale=Math.min(100,Math.max(25,Number(size)||100))/100;
 const face=Math.max(40,Math.min(360,width-48,(height-150)*621/1280))*scale;
 const panelWidth=Math.min(width-16,Math.max(190,face+24)),panelHeight=Math.min(height-16,face*1280/621+116);
 const clamp=(v,min,max)=>Math.min(Math.max(min,max),Math.max(min,v));
 return {face,width:panelWidth,height:panelHeight,x:clamp(Number.isFinite(position.x)?position.x:width-panelWidth-12,8,width-panelWidth-8),y:clamp(Number.isFinite(position.y)?position.y:80,8,height-panelHeight-8)};
}
export function positionFloatingCalculator(state){
 const panel=document.querySelector?.('.floating-calculator');if(!panel)return;
 const layout=floatingCalculatorLayout({width:window.innerWidth,height:window.innerHeight},state.personalization.calcSize,state.calcPosition);
 state.calcPosition={x:layout.x,y:layout.y};
 panel.style.left=layout.x+'px';panel.style.top=layout.y+'px';panel.style.width=layout.width+'px';panel.style.setProperty('--floating-face-width',layout.face+'px');
 const actual=panel.getBoundingClientRect();
 state.calcPosition.y=Math.max(8,Math.min(state.calcPosition.y,window.innerHeight-actual.height-8));
 panel.style.top=state.calcPosition.y+'px';
}
export function installFloatingCalculator(state){
 let drag=null;
 document.addEventListener('pointerdown',event=>{
  const handle=event.target.closest?.('[data-calculator-drag]');if(!handle||event.target.closest('button,input'))return;
  event.preventDefault();positionFloatingCalculator(state);drag={id:event.pointerId,...state.calcPosition};
  // Keep the original pointer coordinates separate from the window origin.
  drag.pointerX=event.clientX;drag.pointerY=event.clientY;
  handle.setPointerCapture?.(event.pointerId);
 });
 document.addEventListener('pointermove',event=>{
  if(!drag||drag.id!==event.pointerId)return;
  state.calcPosition={x:drag.x+event.clientX-drag.pointerX,y:drag.y+event.clientY-drag.pointerY};positionFloatingCalculator(state);
 });
 for(const type of ['pointerup','pointercancel'])document.addEventListener(type,()=>{drag=null;});
 document.addEventListener('keydown',event=>{
  if(!event.target.hasAttribute?.('data-calculator-drag')||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
  event.preventDefault();event.stopImmediatePropagation();positionFloatingCalculator(state);
  const step=event.shiftKey?40:10;state.calcPosition.x+=event.key==='ArrowLeft'?-step:event.key==='ArrowRight'?step:0;state.calcPosition.y+=event.key==='ArrowUp'?-step:event.key==='ArrowDown'?step:0;positionFloatingCalculator(state);
 },true);
 window.addEventListener?.('resize',()=>positionFloatingCalculator(state));
}
