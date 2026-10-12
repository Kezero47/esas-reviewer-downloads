const normalizedType = question => String(question?.type || '').trim().toLowerCase();

// Weekly allowance changes at Friday 00:00 in the Philippines (UTC+8).
export function freeWeek(now = Date.now()) {
  return Math.floor((now + 8 * 3600000 - Date.UTC(1970, 0, 2)) / (7 * 86400000));
}
export function freeQuestionsForSubject(questions, subjectId, limit = 40, now = Date.now()) {
  const rows = questions.filter(q => q.subject === subjectId).sort((a,b)=>a.id.localeCompare(b.id));
  if (!rows.length) return [];
  const offset = ((freeWeek(now) * limit) % rows.length + rows.length) % rows.length;
  return Array.from({length: Math.min(limit, rows.length)}, (_, i) => rows[(offset+i)%rows.length]);
}
export function freeQuestionIds(questions, now = Date.now()) {
  return new Set([...new Set(questions.map(q=>q.subject))].flatMap(id=>freeQuestionsForSubject(questions,id,40,now).map(q=>q.id)));
}
export function hasPremiumAccess({owner=false, accessUntil=0, plan='', now=Date.now()}={}) {
  return Boolean(owner) || plan === 'premium' && Number(accessUntil) > now;
}

export function hasFullAccess({ owner = false, accessUntil = 0, now = Date.now() } = {}) {
  return Boolean(owner) || Number(accessUntil) > now;
}

export function accessibleQuestions(questions, entitlement = {}) {
  if (hasFullAccess(entitlement)) return questions;
  const allowed = freeQuestionIds(questions, entitlement.now ?? Date.now());
  return questions.filter(question => allowed.has(question.id));
}

export function accessLabel(accessUntil, now = Date.now()) {
  if (Number(accessUntil) <= now) return 'Free access';
  return `Full access until ${new Date(Number(accessUntil)).toLocaleDateString()}`;
}

export function filterUsers(users, search = '') {
  const needle = String(search).trim().toLowerCase();
  if (!needle) return [...users];
  return users.filter(user => [user.name, user.email, user.uid]
    .some(value => String(value ?? '').toLowerCase().includes(needle)));
}
