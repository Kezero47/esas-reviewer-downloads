// One atomic localStorage record per authenticated account. Original keys are
// deliberately left intact for explicit recovery, never silently claimed.
export const STUDY_KEYS = new Set(['session','lastResult','quizLibrary','quizHistory',
  'topicStats','rankProgress','rankSessions','quizCycles','notes','bookmarks',
  'lessonBookmarks','customSourceFolders','profileDetails','noteDraft','ocrDraft','restoredExamLibrary','restoredExamFolders']);
const copy = value => JSON.parse(JSON.stringify(value));
const object = value => !!value && typeof value === 'object' && !Array.isArray(value);
const validSession = value => object(value) && Array.isArray(value.ids) && value.ids.length>0
  && value.ids.every(id=>typeof id==='string') && object(value.answers)
  && Number.isInteger(value.index) && value.index>=0 && value.index<value.ids.length;
export function validStudyData(data) {
  if (!object(data)) return false;
  for (const key of ['notes','bookmarks','lessonBookmarks','customSourceFolders','quizHistory','quizLibrary','restoredExamLibrary','restoredExamFolders']) {
    if (Object.hasOwn(data,key) && !Array.isArray(data[key])) return false;
  }
  for (const key of ['topicStats','rankProgress','rankSessions','quizCycles','profileDetails']) {
    if (Object.hasOwn(data,key) && !object(data[key])) return false;
  }
  if (data.session && !validSession(data.session)) return false;
  if (data.quizLibrary?.some(entry=>!object(entry)||!entry.id||!validSession(entry.session)||(entry.status==='Completed'&&!object(entry.result)))) return false;
  return true;
}
export function createStudyStore(storage) {
  let uid = null;
  const accounts = new Map();
  const key = id => `esas.study.v1.${id}`;
  const current = () => accounts.get(uid);
  function select(id) {
    uid = id || null;
    if (uid && !accounts.has(uid)) {
      try {
        const raw = storage.getItem(key(uid));
        const record = raw ? JSON.parse(raw) : {version:1,data:{}};
        if (record.version !== 1 || !validStudyData(record.data)) throw Error('Invalid study record');
        accounts.set(uid,{data:record.data,dirty:false,unreadable:false,lastRaw:raw??null});
      } catch {
        accounts.set(uid,{data:{},dirty:false,unreadable:true});
      }
    }
  }
  function flush() {
    const account = current();
    if (!account || account.unreadable) return false;
    try {
      if ((storage.getItem(key(uid))??null) !== account.lastRaw) {
        account.conflict = true;account.dirty = true;return false;
      }
      const raw = JSON.stringify({version:1,data:account.data});
      storage.setItem(key(uid),raw);
      account.lastRaw = raw;
      account.dirty = false;
      return true;
    } catch { account.dirty = true; return false; }
  }
  function update(values) {
    const account = current();
    if (!account || account.unreadable) return false;
    account.data = {...account.data,...copy(values)};
    return flush();
  }
  function canRecoverLegacy() {
    const account=current();
    return !!account && !account.unreadable && Object.entries(account.data).every(([name,value])=>
      name==='profileDetails' || value===null || (Array.isArray(value)&&!value.length) || (object(value)&&!Object.keys(value).length));
  }
  return {
    select, update, flush, canRecoverLegacy,
    restore(values) {
      const account=current();if(!account||account.unreadable||account.dirty)return false;
      const previous=account.data;
      account.data={...copy(values),profileDetails:previous.profileDetails||{}};
      if(flush())return true;
      account.data=previous;account.dirty=false;return false;
    },
    get(name,fallback) { return copy(current() && Object.hasOwn(current().data,name) ? current().data[name] : fallback); },
    status() { return {uid,dirty:!!current()?.dirty,unreadable:!!current()?.unreadable,conflict:!!current()?.conflict}; },
    export() { return JSON.stringify({version:1,uid,data:current()?.data || {},...(current()?.unreadable?{unreadableRecord:storage.getItem(key(uid))}:{})},null,2); },
    legacy() {
      const data = {};
      for (const name of STUDY_KEYS) {
        const raw = storage.getItem(`esas.${name}`);
        if (raw !== null && raw !== undefined) data[name] = JSON.parse(raw);
      }
      return data;
    },
    recoverLegacy() {
      // Recovery is offered only into an empty account, avoiding destructive merges.
      if (!canRecoverLegacy()) return false;
      const legacy = this.legacy();
      if (!validStudyData(legacy)) throw Error('Previous device history is malformed');
      if (current().data.profileDetails) legacy.profileDetails=current().data.profileDetails;
      return update(legacy);
    }
  };
}
