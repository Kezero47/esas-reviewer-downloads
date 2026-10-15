export function readNotifications(storage,uid){try{const rows=JSON.parse(storage.getItem('esas.notifications.'+uid)||'[]');return Array.isArray(rows)?rows:[];}catch{return [];}}
export function addNotification(storage,uid,event,now=Date.now()){
 if(!uid||!event.id)return false;const rows=readNotifications(storage,uid);if(rows.some(x=>x.id===event.id))return false;
 storage.setItem('esas.notifications.'+uid,JSON.stringify([{...event,createdAt:now,read:false},...rows].slice(0,100)));return true;
}
export function activationEvent(current,previous={},now=Date.now()){
 const paid=Number(current.paidUntil??current.accessUntil)||0,premium=Number(current.premiumUntil)||0;
 if(current.source==='Free trial'&&current.paidUntil===undefined)return null;
 if(paid<=now&&premium<=now)return null;
 if(paid<=Number(previous.paid||0)&&premium<=Number(previous.premium||0))return null;
 const plan=premium>now?'Premium':'Pro';return {id:`activation:${paid}:${premium}`,title:`${plan} access activated`,body:`Your access is active until ${new Date(Math.max(paid,premium)).toLocaleDateString()}.`,target:'profile'};
}
