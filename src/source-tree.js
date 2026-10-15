const migratePath=path=>{const p=cleanPath(path),match=/^RSU Past exam (.+)$/.exec(p[0]||'');return match?['Past Exams','RSU',match[1],...p.slice(1)]:p;};
const cleanPath = path => (Array.isArray(path) ? path : String(path || '').split('/')).map(x=>String(x).trim()).filter(Boolean).slice(0,5).map(x=>x.slice(0,80));
export function sourceFolderPath(source) {
  if(source.folderPath?.length)return migratePath(source.folderPath);
  if(source.sourceType==='past-exam')return ['Past Exams','RSU',String(source.sourceYear||'Undated')];
  if(source.sourceType==='reference-book')return ['ESAS Books','Fluid Mechanics'];
  return ['Owner imports'];
}
export function normalizeSourceOrganization(value = [], sources = []) {
  const byId=new Map(sources.map(s=>[s.id,s]));
  const overrides=new Map((Array.isArray(value)?value:[]).filter(x=>byId.has(x?.id)).map(x=>[x.id,x]));
  return sources.map((source,index)=>{const saved=overrides.get(source.id);return {id:source.id,path:saved?migratePath(saved.path):sourceFolderPath(source),order:Number.isFinite(Number(saved?.order))?Number(saved.order):Number(source.order??index)};});
}
export function buildSourceTree(sources, organization=[]) {
  const root={folders:[],sources:[]},settings=normalizeSourceOrganization(organization,sources);
  for(const item of settings){let node=root,path=[];for(const label of item.path){path.push(label);let folder=node.folders.find(f=>f.label===label);if(!folder){folder={label,key:JSON.stringify(path),folders:[],sources:[]};node.folders.push(folder);}node=folder;}node.sources.push({...sources.find(s=>s.id===item.id),order:item.order});}
  const sort=node=>{node.sources.sort((a,b)=>a.order-b.order||a.title.localeCompare(b.title,undefined,{numeric:true}));node.folders.sort((a,b)=>a.label.localeCompare(b.label,undefined,{numeric:true}));node.folders.forEach(sort);};sort(root);return root;
}
export function folderSourceIds(node){return [...node.sources.map(s=>s.id),...node.folders.flatMap(folderSourceIds)];}
