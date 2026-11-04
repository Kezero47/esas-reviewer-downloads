const RATIO=1280/621;
const viewportFor=state=>({width:window.innerWidth,height:window.innerHeight,reservedHeight:state.calcExpandedControls?120:100});
export function floatingCalculatorLayout({width,height,reservedHeight=100},size=100,position={}){
 const base=Math.max(40,Math.min(360,width-32,(height-reservedHeight)/RATIO));
 const face=base*Math.min(100,Math.max(25,Number(size)||100))/100;
 const panelWidth=Math.min(width-16,Math.max(104,face+8)),panelHeight=face*RATIO+64;
 const clamp=(v,min,max)=>Math.min(Math.max(min,max),Math.max(min,v));
 return {base,face,width:panelWidth,height:panelHeight,x:clamp(Number.isFinite(position.x)?position.x:width-panelWidth-12,8,width-panelWidth-8),y:clamp(Number.isFinite(position.y)?position.y:80,8,height-panelHeight-8)};
}
export function positionFloatingCalculator(state){
 // Use the untransformed face width so labels scale correctly on older WebViews too.
 for(const face of document.querySelectorAll?.('.canon-face')||[])if(face.offsetWidth>0)face.style.setProperty('--canon-unit',face.offsetWidth/100+'px');
 const panel=document.querySelector?.('.floating-calculator');if(!panel)return;
 const layout=floatingCalculatorLayout(viewportFor(state),state.personalization.calcSize,state.calcPosition);
 state.calcPosition={x:layout.x,y:state.calcMinimized?Math.max(8,Math.min(state.calcPosition?.y??80,window.innerHeight-42)):layout.y};
 const width=state.calcExpandedControls?Math.min(window.innerWidth-16,Math.max(176,layout.width)):layout.width;
 const x=Math.max(8,Math.min(layout.x,window.innerWidth-width-8));state.calcPosition.x=x;
 panel.style.left=x+'px';panel.style.top=layout.y+'px';panel.style.width=width+'px';
 panel.style.setProperty('--floating-face-width',layout.face+'px');panel.style.setProperty('--floating-scale',layout.face/360);
 const actual=panel.getBoundingClientRect();
 state.calcPosition.y=Math.max(8,Math.min(state.calcPosition.y,window.innerHeight-actual.height-8));
 panel.style.top=state.calcPosition.y+'px';
 const options=panel.querySelector?.('.calculator-size-control');
 if(options){
  const optionWidth=Math.min(260,window.innerWidth-16);
  options.style.width=optionWidth+'px';options.style.left=Math.max(8-x,Math.min(0,window.innerWidth-8-optionWidth-x))+'px';
  const header=panel.querySelector('header'),height=options.getBoundingClientRect().height;
  const below=(header?.offsetHeight||32)+4;
  options.style.top=(state.calcPosition.y+below+height>window.innerHeight-8&&state.calcPosition.y-height-4>=8?-height-4:below)+'px';
 }
 for(const el of document.querySelectorAll?.('[data-calculator-size-value]')||[])el.textContent=state.personalization.calcSize+'%';
 const handle=panel.querySelector?.('[data-calculator-resize]');handle?.setAttribute('aria-valuenow',state.personalization.calcSize);
}
export function installFloatingCalculator(state,save=()=>{}){
 let gesture=null;
 document.addEventListener('pointerdown',event=>{
  const resize=event.target.closest?.('[data-calculator-resize]'),handle=resize||event.target.closest?.('[data-calculator-drag]');
  if(!handle||(!resize&&event.target.closest('button,input')))return;
  event.preventDefault();positionFloatingCalculator(state);
  gesture={id:event.pointerId,...state.calcPosition,pointerX:event.clientX,pointerY:event.clientY,resize:!!resize,face:floatingCalculatorLayout(viewportFor(state),state.personalization.calcSize).face};
  handle.setPointerCapture?.(event.pointerId);
 });
 document.addEventListener('pointermove',event=>{
  if(!gesture||gesture.id!==event.pointerId)return;
  const dx=event.clientX-gesture.pointerX,dy=event.clientY-gesture.pointerY;
  if(gesture.resize){
   const base=floatingCalculatorLayout(viewportFor(state)).base;
   const change=Math.abs(dx)>=Math.abs(dy/RATIO)?dx:dy/RATIO;
   state.personalization.calcSize=Math.min(100,Math.max(25,Math.round((gesture.face+change)/base*100)));
  }else state.calcPosition={x:gesture.x+dx,y:gesture.y+dy};
  positionFloatingCalculator(state);
 });
 for(const type of ['pointerup','pointercancel'])document.addEventListener(type,event=>{if(gesture&&gesture.id===event.pointerId){gesture=null;save();}});
 document.addEventListener('keydown',event=>{
  const resize=event.target.hasAttribute?.('data-calculator-resize');
  if(resize&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key)){
   event.preventDefault();event.stopImmediatePropagation();
   state.personalization.calcSize=event.key==='Home'?25:event.key==='End'?100:Math.min(100,Math.max(25,state.personalization.calcSize+(['ArrowRight','ArrowUp'].includes(event.key)?5:-5)));
   positionFloatingCalculator(state);save();return;
  }
  if(!event.target.hasAttribute?.('data-calculator-drag')||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
  event.preventDefault();event.stopImmediatePropagation();positionFloatingCalculator(state);
  const step=event.shiftKey?40:10;state.calcPosition.x+=event.key==='ArrowLeft'?-step:event.key==='ArrowRight'?step:0;state.calcPosition.y+=event.key==='ArrowUp'?-step:event.key==='ArrowDown'?step:0;positionFloatingCalculator(state);save();
 },true);
 window.addEventListener?.('resize',()=>positionFloatingCalculator(state));
}
