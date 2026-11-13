// Small, escaped offline renderer. Slashes and parentheses retain their original grouping.
export const escapeMath=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function scriptMarkup(value){
 const text=String(value??'');let out='';
 for(let i=0;i<text.length;i++){
  const marker=text[i];
  if(marker==='_'||marker==='^'){
   let end=i+1,body='';const opener=text[end],closer=opener==='{'?'}':opener==='('?')':null;
   if(closer){let depth=1,start=++end;for(;end<text.length;end++){if(text[end]===opener)depth++;if(text[end]===closer&&!--depth)break;}if(depth===0)body=text.slice(start,end);}
   else{const match=text.slice(end).match(marker==='_'?/^[\p{L}0-9]+/u:/^(?:[−-]?\d+(?:\.\d+)?|[\p{L}]+(?:_[\p{L}0-9]+)?)/u);if(match){body=match[0];end+=body.length-1;if(marker==='^'&&text[end+1]==='('){let close=end+2,depth=1;for(;close<text.length;close++){if(text[close]==='(')depth++;if(text[close]===')'&&!--depth)break;}if(depth===0){body+=text.slice(end+1,close+1);end=close;}}}}
   if(body){const tag=marker==='_'?'sub':'sup';out+=`<${tag}>${scriptMarkup(body)}</${tag}>`;i=end;continue;}
  }
  out+=escapeMath(marker);
 }
 return out;
}
