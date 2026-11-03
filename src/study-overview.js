// Summarize actual saved answers; never turn sample design numbers into user data.
export function studyOverview(bank, library = [], active = null, subjectId = null) {
  const questions = new Map(bank.map(q => [q.id, q]));
  const sessions = library.map(entry => active?.libraryId && entry.session?.libraryId === active.libraryId ? active :
    entry.result?.scoredIds ? {...entry.session,ids:entry.result.scoredIds} : entry.session).filter(Boolean);
  if (active && !sessions.some(s => s === active || (s.libraryId && s.libraryId === active.libraryId))) sessions.push(active);
  let answered = 0, correct = 0;
  const subjects = new Set(), sourceIds = new Set();
  for (const session of sessions) {
    const snapshots = new Map((session.questions || []).map(q=>[q.id,q]));
    for (const id of new Set(session.ids || [])) {
      const q = snapshots.get(id) || questions.get(id), answer = session.answers?.[id];
      if (!q || (subjectId && q.subject !== subjectId) || !Number.isInteger(answer) || answer < 0 || answer >= q.choices.length) continue;
      // Held questions remain visible elsewhere but cannot contribute to accuracy.
      if (!Number.isInteger(q.answer) || q.quality === 'held' || q.eligibleForScoredQuiz === false) continue;
      answered++;
      if (answer === q.answer) correct++;
      subjects.add(q.subject);
      sourceIds.add(q.sourceId);
    }
  }
  return {answered, correct, accuracy: answered ? Math.round(correct / answered * 100) : null, subjects: subjects.size, sourceIds: [...sourceIds]};
}

export function navigationSection(page) {
  if (['home','study-details'].includes(page)) return 'home';
  if (['reviewer', 'subject', 'lesson', 'question-library', 'question-sources','question-search'].includes(page)) return 'reviewer';
  if (page === 'printable-exam') return 'printable-exam';
  if (['quiz', 'quiz-setup', 'results', 'active-quiz','attempt-history'].includes(page)) return 'quiz';
  return 'more';
}
