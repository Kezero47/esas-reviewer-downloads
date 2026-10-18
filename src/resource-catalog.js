// Only data is delivered by the catalog. Code, credentials and entitlements stay in the app.
export const MAX_CATALOG_BYTES=20*1024*1024;
export async function validateResourceCatalog(value,{crypto=globalThis.crypto}={}) {
  if(value?.schemaVersion!==1||!/^\d{4}-\d\d-\d\dT/.test(value.publishedAt||'')||!Number.isFinite(Date.parse(value.publishedAt)))throw Error('Unsupported resource catalog.');
  if(!Array.isArray(value.sources)||!value.sources.length||!Array.isArray(value.questions)||!value.questions.length||value.questions.length>50000)throw Error('Incomplete resource catalog.');
  const sourceIds=new Set(),questionIds=new Set();
  for(const s of value.sources){
    if(!s?.id||typeof s.id!=='string'||sourceIds.has(s.id)||typeof s.title!=='string'||!Array.isArray(s.subjectIds)||!s.subjectIds.every(x=>typeof x==='string'))throw Error('Invalid resource source.');
    if(s.folderPath&&(!Array.isArray(s.folderPath)||!s.folderPath.every(x=>typeof x==='string')))throw Error('Invalid source folder.');
    sourceIds.add(s.id);
  }
  for(const q of value.questions){
    if(typeof q?.id!=='string'||!q.id||questionIds.has(q.id)||!sourceIds.has(q.sourceId)||typeof q.subject!=='string'||!q.subject||typeof q.prompt!=='string'||!q.prompt.trim()||!Array.isArray(q.choices)||q.choices.length!==4||!q.choices.every(x=>typeof x==='string'))throw Error('Invalid resource question.');
    if(q.quality==='ready'){if(!Number.isInteger(q.answer)||q.answer<0||q.answer>3||q.eligibleForScoredQuiz===false)throw Error('Invalid scored resource answer.');}
    // Some historical held rows retain a candidate answer. Their quality still
    // excludes them from scoring; never promote one while loading a catalog.
    else if(q.answer!==null&&(!Number.isInteger(q.answer)||q.answer<0||q.answer>3))throw Error('Invalid held resource answer.');
    questionIds.add(q.id);
  }
  const data=JSON.stringify({sources:value.sources,questions:value.questions});
  if(new TextEncoder().encode(data).byteLength>MAX_CATALOG_BYTES)throw Error('Resource catalog is too large.');
  const hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(data)))].map(x=>x.toString(16).padStart(2,'0')).join('');
  if(value.revision!==hash)throw Error('Resource catalog checksum does not match.');
  return value;
}

// IndexedDB avoids the small localStorage quota; failures leave the bundled bank intact.
export function resourceCatalogCache(indexedDB=globalThis.indexedDB){
  const transact=(mode,value)=>new Promise((resolve,reject)=>{
    if(!indexedDB){resolve(null);return;}
    const open=indexedDB.open('esas-resource-catalog',1);
    open.onupgradeneeded=()=>open.result.createObjectStore('catalog');
    open.onerror=()=>reject(open.error);
    open.onsuccess=()=>{
      const db=open.result,tx=db.transaction('catalog',mode),store=tx.objectStore('catalog');
      const request=mode==='readonly'?store.get('current'):store.put(value,'current');
      tx.oncomplete=()=>{db.close();resolve(mode==='readonly'?request.result:null);};
      tx.onerror=()=>{db.close();reject(tx.error);};
      tx.onabort=()=>{db.close();reject(tx.error||Error('Catalog cache aborted.'));};
    };
  });
  return {read:()=>transact('readonly'),write:value=>transact('readwrite',value)};
}

export function createResourceCatalogClient({fetch:fetcher=globalThis.fetch,cache=resourceCatalogCache(),onCatalog,validate=validateResourceCatalog,url='./resources/catalog.json'}={}){
  let current=null,flight=null,restored=false;
  const accept=async(value,fromCache)=>{
    const next=await validate(value);
    if(current&&Date.parse(next.publishedAt)<Date.parse(current.publishedAt))return false;
    if(current?.revision===next.revision){if(Date.parse(next.publishedAt)>Date.parse(current.publishedAt))current=next;return false;}
    // Application can defer mutation during an active quiz without losing this cached snapshot.
    onCatalog(next);current=next;
    if(!fromCache)try{await cache.write(next);}catch{}
    return true;
  };
  return {refresh(){
    if(flight)return flight;
    flight=(async()=>{
      if(!restored){restored=true;try{const saved=await cache.read();if(saved)await accept(saved,true);}catch{}}
      try{
        const response=await fetcher(url,{cache:'no-store',signal:globalThis.AbortSignal?.timeout?.(20000)});
        if(!response.ok)throw Error('Resource download unavailable.');
        const text=await response.text();
        if(new TextEncoder().encode(text).byteLength>MAX_CATALOG_BYTES)throw Error('Resource catalog is too large.');
        return {updated:await accept(JSON.parse(text),false),offline:false};
      }catch{return {updated:false,offline:true};}
    })().finally(()=>{flight=null;});
    return flight;
  }};
}

export function deferredResourceCatalog(apply,isBusy){
  let pending=null;
  return {receive(catalog){pending=catalog;return this.flush();},flush(){if(!pending||isBusy())return false;const next=pending;pending=null;apply(next);return true;}};
}
