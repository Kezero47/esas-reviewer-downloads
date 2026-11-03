export function appZoomControls(preferences){
 if(!preferences.zoomUnlocked)return '';
 return `<aside class="app-zoom-toolbar" aria-label="App size controls"><button type="button" data-app-zoom-step="-5" aria-label="Zoom app out">−</button><output data-app-zoom-value>${preferences.appZoom}%</output><button type="button" data-app-zoom-step="5" aria-label="Zoom app in">+</button><button type="button" data-app-zoom-reset aria-label="Reset app size to 100 percent">100%</button><button type="button" data-app-zoom-lock aria-label="Lock app size">Lock</button></aside>`;
}
export function appZoomSettings(p){
 return `<section class="glass pad app-size-settings"><h3>App size</h3><p class="small muted">Unlock to adjust the whole app with the controls or a two-finger pinch. Your preferred size stays saved when locked.</p><button type="button" class="btn secondary" data-app-zoom-lock aria-pressed="${p.zoomUnlocked}">${p.zoomUnlocked?'Lock app zoom':'Unlock app zoom'}</button><label class="field">App size <output data-app-zoom-value>${p.appZoom}%</output><input type="range" min="75" max="150" step="5" value="${p.appZoom}" data-app-zoom-size aria-label="App size" ${p.zoomUnlocked?'':'disabled'}></label><button type="button" class="link-button" data-app-zoom-reset ${p.zoomUnlocked?'':'disabled'}>Reset app size to 100%</button></section>`;
}
export function installAppZoom(state,save,render){
 let pinch=null;
 const update=value=>{
  if(!state.personalization.zoomUnlocked)return;
  state.personalization.appZoom=Math.min(150,Math.max(75,Math.round(Number(value)||100)));save();
  for(const el of document.querySelectorAll?.('[data-app-zoom-value]')||[])el.textContent=state.personalization.appZoom+'%';
  for(const el of document.querySelectorAll?.('[data-app-zoom-size]')||[])el.value=state.personalization.appZoom;
 };
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-app-zoom-lock],[data-app-zoom-step],[data-app-zoom-reset]');if(!button)return;
  if(button.hasAttribute('data-app-zoom-lock')){state.personalization.zoomUnlocked=!state.personalization.zoomUnlocked;pinch=null;save();render();return;}
  if(button.hasAttribute('data-app-zoom-reset'))update(100);
  else update(state.personalization.appZoom+Number(button.dataset.appZoomStep));
 });
 document.addEventListener('input',event=>{if(event.target.hasAttribute('data-app-zoom-size'))update(event.target.value);});
 const distance=touches=>Math.hypot(touches[0].clientX-touches[1].clientX,touches[0].clientY-touches[1].clientY);
 document.addEventListener('touchstart',event=>{
  if(!state.personalization.zoomUnlocked||event.touches.length!==2||event.target.closest?.('.floating-calculator'))return;
  const start=distance(event.touches);if(!start)return;
  pinch={distance:start,zoom:state.personalization.appZoom};event.preventDefault();
 },{passive:false});
 document.addEventListener('touchmove',event=>{if(pinch&&event.touches.length===2&&state.personalization.zoomUnlocked){event.preventDefault();update(pinch.zoom*distance(event.touches)/pinch.distance);}},{passive:false});
 for(const type of ['touchend','touchcancel'])document.addEventListener(type,event=>{if(event.touches.length<2)pinch=null;});
}
