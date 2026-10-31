// Summarize actual saved answers; never turn sample design numbers into user data.
export function studyOverview(bank, library = [], active = null) {
  const questions = new Map(bank.map(q => [q.id, q]));
  const sessions = library.map(entry => entry.session).filter(Boolean);
  if (active && !sessions.some(s => s === active || (s.libraryId && s.libraryId === active.libraryId))) sessions.push(active);
  let answered = 0, correct = 0;
  const subjects = new Set(), sourceIds = new Set();
  for (const session of sessions) {
    for (const id of new Set(session.ids || [])) {
      const q = questions.get(id), answer = session.answers?.[id];
      if (!q || !Number.isInteger(answer) || answer < 0 || answer >= q.choices.length) continue;
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
  if (['home'].includes(page)) return 'home';
  if (['reviewer', 'subject', 'lesson', 'question-library', 'question-sources'].includes(page)) return 'reviewer';
  if (page === 'printable-exam') return 'printable-exam';
  if (['quiz', 'quiz-setup', 'results', 'active-quiz'].includes(page)) return 'quiz';
  return 'more';
}
