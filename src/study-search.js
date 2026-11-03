const normalize=value=>String(value||'').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();
export function searchQuestions(bank,{query='',subject='',source='',page=0}={}){
 const terms=normalize(query).split(' ').filter(Boolean);
 const rows=bank.filter(q=>(!subject||q.subject===subject)&&(!source||q.sourceId===source)&&terms.every(term=>normalize(q.prompt+' '+q.topic).includes(term)));
 const pages=Math.max(1,Math.ceil(rows.length/30)),index=Math.max(0,Math.min(pages-1,Math.trunc(page)||0));
 return {rows:rows.slice(index*30,index*30+30),total:rows.length,page:index,pages};
}
export function comparableAttempts(first,second){
 if(!first||!second||first.status!=='Completed'||second.status!=='Completed')return false;
 const a=first.result,b=second.result;if(!a||!b||['ranked','retry','tournament'].includes(a.mode)||a.mode!==b.mode||a.practice!==b.practice)return false;
 return JSON.stringify([...new Set(a.ids)].sort())===JSON.stringify([...new Set(b.ids)].sort());
}
export function historyEntries(library,{mode='all',query=''}={}){
 return library.filter(x=>x.status==='Completed'&&(mode==='all'||x.result?.mode===mode)&&normalize(x.session?.category).includes(normalize(query)))
 .sort((a,b)=>(b.result?.finishedAt||0)-(a.result?.finishedAt||0));
}
