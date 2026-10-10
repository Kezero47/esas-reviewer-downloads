// The browser uses the same account callbacks as the Android bridge.
export function installWebBridge(){
  if(window.NativeBridge)return;
  window.ESAS_WEB=true;
  let sdk,auth,db,functions,ready,listeners=[],usersListener;
  const emit=(name,data)=>window.esasNative?.[name]?.(JSON.stringify(data));
  const fail=e=>emit('operation',{error:e?.message||String(e)});
  const run=fn=>Promise.resolve(ready).then(fn).catch(fail);
  const ms=x=>x?.toMillis?.()||0;
  const owner=()=>auth.currentUser?.email?.toLowerCase()==='kerrmagramo47@gmail.com'&&auth.currentUser.emailVerified;
  const requireUser=()=>{if(!auth.currentUser)throw Error('Sign in first.');return auth.currentUser};
  const requireOwner=()=>{if(!owner())throw Error('Verified owner access required.');};
  function stop(){listeners.splice(0).forEach(f=>f());usersListener?.();usersListener=null;}
  async function ensureProfile(user){
    const ref=sdk.doc(db,'users',user.uid);
    await sdk.runTransaction(db,async tx=>{const row=await tx.get(ref);if(!row.exists())tx.set(ref,{uid:user.uid,email:user.email,name:(user.displayName||user.email.split('@')[0]).slice(0,80),lastSeenAt:sdk.serverTimestamp(),trialStartedAt:sdk.serverTimestamp()});else tx.update(ref,{lastSeenAt:sdk.serverTimestamp()});});
  }
  function accountData(){
    stop();const user=auth.currentUser;
    listeners.push(sdk.onSnapshot(sdk.doc(db,'public_config','app'),row=>emit('config',row.data()||{}),fail));
    if(!user)return;
    listeners.push(sdk.onSnapshot(sdk.doc(db,'users',user.uid),async row=>{
      const d=row.data()||{},paid=ms(d.accessUntil),trial=d.accessSource==='Owner revoked'?0:ms(d.trialStartedAt)+72*3600000;
      emit('entitlement',{accessUntil:Math.max(paid,trial),trialUntil:trial,source:trial>paid?'Free trial':d.accessSource||'Free',printableExamUnlocked:d.printableExamUnlocked===true});
      const details={...d};if(!details.photoData&&d.photoPath){try{details.photoData=await sdk.getDownloadURL(sdk.ref(sdk.getStorage(),d.photoPath));}catch{}}
      emit('profileDetails',details);
    },fail));
    if(owner())bridge.loadUsers();
  }
  async function pickImage(kind){
    const user=requireUser();if(kind==='qr')requireOwner();
    const input=document.createElement('input');input.type='file';input.accept='image/png,image/jpeg,image/webp';
    input.onchange=async()=>{try{
      const file=input.files?.[0];if(!file)return;if(file.size>10*1024*1024)throw Error('Choose an image smaller than 10 MB.');
      const bitmap=await createImageBitmap(file);let edge=kind==='qr'?1000:480,data;
      for(let i=0;i<5;i++) {const scale=Math.min(1,edge/Math.max(bitmap.width,bitmap.height)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);data=canvas.toDataURL('image/jpeg',.88);if(data.length<=250000)break;edge=Math.floor(edge*.75);}
      bitmap.close();if(data.length>250000)throw Error('Image is too detailed. Choose a smaller image.');
      if(kind==='qr')await sdk.setDoc(sdk.doc(db,'public_config','app'),{gcashQrData:data,gcashQrPath:sdk.deleteField(),updatedAt:sdk.serverTimestamp()},{merge:true});
      else await sdk.updateDoc(sdk.doc(db,'users',user.uid),{photoData:data,profileUpdatedAt:sdk.serverTimestamp()});
      emit('operation',{message:kind==='qr'?'GCash QR updated.':'Profile picture updated.'});
    }catch(e){fail(e)}};input.click();
  }
  const bridge={
    setTheme:()=>{},authState:()=>run(()=>{}),
    authenticate:(mode,email,password,name)=>run(async()=>{
      if(mode==='register'){const result=await sdk.createUserWithEmailAndPassword(auth,email.trim(),password);await sdk.updateProfile(result.user,{displayName:name.trim().slice(0,80)});await ensureProfile(result.user);await sdk.updateDoc(sdk.doc(db,'users',result.user.uid),{name:name.trim().slice(0,80),profileUpdatedAt:sdk.serverTimestamp()});emit('auth',{uid:result.user.uid,email:result.user.email,name:result.user.displayName,owner:owner()});}
      else await sdk.signInWithEmailAndPassword(auth,email.trim(),password);
    }),
    resetPassword:email=>run(async()=>{await sdk.sendPasswordResetEmail(auth,email.trim());emit('operation',{message:'Password reset email sent.'})}),
    signOut:()=>run(()=>sdk.signOut(auth)),
    loadAccountData:()=>run(accountData),
    loadUsers:()=>run(()=>{requireOwner();usersListener?.();usersListener=sdk.onSnapshot(sdk.collection(db,'users'),rows=>emit('users',{items:rows.docs.map(r=>{const d=r.data();return {...d,uid:r.id,lastSeenAt:ms(d.lastSeenAt),accessUntil:Math.max(ms(d.accessUntil),d.accessSource==='Owner revoked'?0:ms(d.trialStartedAt)+72*3600000)};}).sort((a,b)=>(a.email||'').localeCompare(b.email||''))}),fail)}),
    saveProfile:json=>run(async()=>{const user=requireUser(),d=JSON.parse(json);const fields={};for(const [key,max] of Object.entries({name:80,nickname:50,profession:60,address:180,phone:30}))fields[key]=String(d[key]||'').trim().slice(0,max);fields.age=Math.max(0,Math.min(120,Math.trunc(Number(d.age)||0)));fields.profileUpdatedAt=sdk.serverTimestamp();await sdk.updateDoc(sdk.doc(db,'users',user.uid),fields);emit('operation',{message:'Profile saved.'})}),
    pickProfilePhoto:()=>run(()=>pickImage('profile')),pickGcashQr:()=>run(()=>pickImage('qr')),
    saveAppConfig:json=>run(async()=>{requireOwner();await sdk.setDoc(sdk.doc(db,'public_config','app'),{...JSON.parse(json),updatedAt:sdk.serverTimestamp()},{merge:true});emit('operation',{message:'Settings saved.'})}),
    saveSourceOrganization:json=>run(async()=>{requireOwner();await sdk.setDoc(sdk.doc(db,'public_config','app'),{sourceOrganization:JSON.parse(json),updatedAt:sdk.serverTimestamp()},{merge:true});emit('operation',{message:'Source arrangement saved.'})}),
    grantAccess:(uid,days)=>run(async()=>{requireOwner();if(!Number.isInteger(days)||days<1||days>365)throw Error('Invalid access duration.');const ref=sdk.doc(db,'users',uid);await sdk.runTransaction(db,async tx=>{const row=await tx.get(ref);tx.update(ref,{accessUntil:sdk.Timestamp.fromMillis(Math.max(Date.now(),ms(row.data()?.accessUntil))+days*86400000),accessSource:'Owner granted',accessUpdatedAt:sdk.serverTimestamp()})});emit('operation',{message:'Access granted.'})}),
    grantPrintableAccess:uid=>run(async()=>{requireOwner();await sdk.updateDoc(sdk.doc(db,'users',uid),{printableExamUnlocked:true,printableExamUpdatedAt:sdk.serverTimestamp()});emit('operation',{message:'Printable exam access granted.'})}),
    revokeAccess:uid=>run(async()=>{requireOwner();await sdk.updateDoc(sdk.doc(db,'users',uid),{accessUntil:sdk.Timestamp.fromMillis(0),accessSource:'Owner revoked',accessUpdatedAt:sdk.serverTimestamp()});emit('operation',{message:'Access revoked.'})}),
    tournamentCall:json=>run(async()=>{try{const result=await sdk.httpsCallable(functions,'tournament')(JSON.parse(json));emit('tournament',result.data)}catch(e){emit('tournament',{error:e.message})}}),
    savePrintableExam:(name,base64)=>{const bytes=Uint8Array.from(atob(base64),c=>c.charCodeAt(0)),url=URL.createObjectURL(new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},
    loadDraft:()=>{},loadPublishedQuestions:()=>{},loadSubmissions:()=>{},loadContentManager:()=>{},loadLeaderboard:()=>{},submitQuizResult:()=>{},
  };
  window.NativeBridge=new Proxy(bridge,{get:(target,key)=>key in target?target[key]:()=>fail(Error('This feature is available in the Android app.'))});
  ready=import('./firebase-web.bundle.js').then(module=>{
    sdk=module;const config=window.ESAS_FIREBASE_CONFIG;if(!config?.apiKey)throw Error('Web account configuration is missing.');
    const app=sdk.initializeApp(config);auth=sdk.getAuth(app);db=sdk.initializeFirestore(app,{localCache:sdk.persistentLocalCache({tabManager:sdk.persistentMultipleTabManager()})});functions=sdk.getFunctions(app,'asia-southeast1');
    sdk.onAuthStateChanged(auth,async user=>{stop();emit('auth',user?{uid:user.uid,email:user.email,name:user.displayName,owner:owner()}:{});accountData();try{if(user)await ensureProfile(user);}catch(e){fail(e)}});
  }).catch(e=>{fail(e);throw e});
}
