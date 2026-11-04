export const ACTIVATION_KINDS={
 pro:{label:'Pro',description:'Full question access for the selected number of days.'},
 premium:{label:'Premium',description:'Premium features and offline study for the selected number of days.'},
 'printable-exam':{label:'Printable Exams',description:'One-time printable exam unlock; no subscription days.'},
};
export function activationKind(code){return code.kind==null?'pro':Object.hasOwn(ACTIVATION_KINDS,code.kind)?code.kind:null;}
export function activationStatus(code,now=Date.now()){
 if(code.usedByUid)return 'used';
 if(code.revoked)return 'revoked';
 if(!activationKind(code))return 'unknown';
 const expiry=Number(code.expiresAt);
 return !Number.isFinite(expiry)||expiry<=0?'unknown':expiry<=now?'expired':'ready';
}
export function activationRows(codes,{query='',status='ready',page=0,now=Date.now()}={}){
 const counts={all:codes.length,ready:0,used:0,expired:0,revoked:0,unknown:0};
 for(const code of codes)counts[activationStatus(code,now)]++;
 const term=query.trim().toLowerCase();
 const rows=codes.filter(code=>(status==='all'||activationStatus(code,now)===status)&&(!term||`${code.code} ${ACTIVATION_KINDS[activationKind(code)]?.label||'Unknown product'}`.toLowerCase().includes(term)))
  .sort((a,b)=>(Number(b.createdAt)||0)-(Number(a.createdAt)||0)||String(a.code).localeCompare(String(b.code)));
 const pages=Math.max(1,Math.ceil(rows.length/10)),index=Math.max(0,Math.min(pages-1,Number(page)||0));
 return {rows:rows.slice(index*10,index*10+10),total:rows.length,counts,pages,page:index};
}
