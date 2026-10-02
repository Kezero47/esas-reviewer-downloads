const normalizedType = question => String(question?.type || '').trim().toLowerCase();

export function freeQuestionsForSubject(questions, subjectId, limit = 20) {
  const subjectQuestions = questions.filter(question => question.subject === subjectId);
  const terms = subjectQuestions.filter(question => normalizedType(question) !== 'solving');
  const solving = subjectQuestions.filter(question => normalizedType(question) === 'solving');

  if (!solving.length) return terms.slice(0, limit);

  const selected = [...terms.slice(0, 10), ...solving.slice(0, 10)];
  if (selected.length >= limit) return selected.slice(0, limit);

  const chosen = new Set(selected.map(question => question.id));
  const remainder = subjectQuestions.filter(question => !chosen.has(question.id));
  return [...selected, ...remainder.slice(0, limit - selected.length)];
}

export function freeQuestionIds(questions) {
  const subjects = [...new Set(questions.map(question => question.subject))];
  return new Set(subjects.flatMap(subjectId =>
    freeQuestionsForSubject(questions, subjectId).map(question => question.id)
  ));
}

export function hasFullAccess({ owner = false, accessUntil = 0, now = Date.now() } = {}) {
  return Boolean(owner) || Number(accessUntil) > now;
}

export function accessibleQuestions(questions, entitlement = {}) {
  if (hasFullAccess(entitlement)) return questions;
  const allowed = freeQuestionIds(questions);
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
