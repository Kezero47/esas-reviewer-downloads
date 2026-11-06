const CACHE='esas-premium-v2.9.6';
const FILES=["./src/question-diagram-policy.js","./src/terminology-data.js","./src/study-terminology.js","./src/activation-code-ui.js","./src/app-runtime.js","./src/study-backup.js","./src/study-search.js","./src/reviewed-explanations.js","./manifest.webmanifest","./assets/brand/logo-horizontal.png","./assets/brand/logo-stacked.png","./assets/brand/app-icon.png","./assets/gcash-owner-qr.jpg","./src/accessibility.js","./src/study-recommendations.js","./src/study-store.js","./src/attempt-integrity.js","./src/app-zoom.js","./Assets_ESAS_Book/esas-book-test3-question-5.png","./Assets_ESAS_Book/esas-book-test3-question-36.png","./Assets_ESAS_Book/esas-book-test3-question-32.png","./Assets_ESAS_Book/esas-book-test3-question-17.png","./Assets_ESAS_Book/esas-book-test3-question-46.png","./Assets_ESAS_Book/esas-book-test3-question-31.png","./Assets_ESAS_Book/esas-book-test3-question-33.png","./Assets_ESAS_Book/esas-book-test3-question-34.png","./Assets_ESAS_Book/esas-book-test3-question-50.png","./Assets_ESAS_Book/esas-book-test3-question-44.png","./Assets_ESAS_Book/esas-book-test3-question-42.png","./src/floating-calculator.js","./approved-design.css","./src/study-overview.js","./src/exam-workspace.js","./src/exam-builder-ui.js","./src/source-answer-audit.js","./src/resource-catalog.js","./resources/catalog.json","./src/canon-layout.js","./src/canon-controller.js","./src/canon-engine.js","./src/economics-questions.js","./src/question-media.js","./src/app-notifications.js","./src/quiz-timer.js","./src/personalization.js","./src/answer-distribution.js","./src/electrical-tools.js","./src/exam-library.js","./src/exam-library-ui.js","./src/ui-icons.js","./src/tournament-client.js","./tournament-config.json","./", "./index.html", "./styles.css", "./web-config.js", "./version.json", "./src/access-policy.js", "./src/app.js", "./src/auth-flow.js", "./src/calc-engine.js", "./src/calculator-ui.js", "./src/content-manager.js", "./src/data.js", "./src/equation-engine.js", "./src/firebase-web.bundle.js", "./src/imported-questions.js", "./src/owner-exam-sources.js", "./src/payment-panel.js", "./src/printable-exam.js", "./src/quiz-engine.js", "./src/quiz-library.js", "./src/ranked-quiz-engine.js", "./src/source-tree.js", "./src/subscription-ui.js", "./src/web-account.js", "./src/answer-corrections.js", "./assets/brand/symbol.png"];
// Installation is atomic: a failed new cache never replaces the previous shell.
// Updates wait for old tabs to close, so old code cannot mix with a new shell.
self.addEventListener('install',event=>event.waitUntil((async()=>{
 try{await (await caches.open(CACHE)).addAll(FILES);}
 catch(error){await caches.delete(CACHE);throw error;}
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 await Promise.all((await caches.keys()).filter(key=>key.startsWith('esas-premium-')&&key!==CACHE).map(key=>caches.delete(key)));
 await self.clients.claim();
})()));
self.addEventListener('message',event=>{
 if(event.data?.type==='offline-status')event.waitUntil(caches.has(CACHE).then(ready=>event.source?.postMessage({type:'offline-status',ready})));
});
const staticFiles=new Set(FILES.map(file=>new URL(file,self.registration.scope).pathname));
const liveFiles=new Set(['resources/catalog.json','tournament-config.json','version.json'].map(file=>new URL(file,self.registration.scope).pathname));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||url.pathname.includes('/downloads/'))return;
 if(!staticFiles.has(url.pathname))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE),cached=await cache.match(event.request,{ignoreSearch:true});
  if(cached&&!liveFiles.has(url.pathname))return cached;
  try{
   const response=await fetch(event.request,{signal:AbortSignal.timeout(4000)});
   if(!response.ok)throw Error('Resource unavailable');
   if(liveFiles.has(url.pathname))await cache.put(event.request,response.clone());
   return response;
  }catch{
   if(cached){for(const client of await self.clients.matchAll())client.postMessage({offline:true});return cached;}
   return Response.error();
  }
 })());
});
