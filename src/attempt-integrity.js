import {isScorableQuestion,scoreQuiz} from './quiz-engine.js';

export function snapshotAttempt(session,bank,sources=[]) {
  const byId = new Map(bank.map(q=>[q.id,q]));
  const sourceTitles = new Map(sources.map(source=>[source.id,source.title]));
  return {...session,attemptId:session.attemptId || session.libraryId || globalThis.crypto?.randomUUID?.() || `attempt-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    questions:session.questions || session.ids.map(id=>byId.get(id)).filter(Boolean).map(q=>JSON.parse(JSON.stringify({...q,sourceTitle:sourceTitles.get(q.sourceId)||q.sourceFile||q.sourceId}))),
    reviewMarks:[...new Set(session.reviewMarks || [])]};
}

export function scoreAttempt(session,bank) {
  const current = new Map(bank.map(q=>[q.id,q]));
  const snapshots = new Map((session.questions || bank).map(q=>[q.id,q]));
  const ids = [...new Set(session.ids)], eligible = [], excluded = [];
  for (const id of ids) {
    const q = snapshots.get(id), live = current.get(id);
    const reason = !live ? 'Question unavailable' : !isScorableQuestion(live) ? 'Question withdrawn from scoring' : !isScorableQuestion(q) ? 'Invalid saved answer key' : null;
    if (reason) excluded.push({id,reason}); else eligible.push(q);
  }
  const scoredIds = eligible.map(q=>q.id);
  return {...scoreQuiz(eligible,scoredIds,session.answers),scoredIds,excluded,
    unanswered:scoredIds.filter(id=>!Number.isInteger(session.answers?.[id]) || session.answers[id]<0 || session.answers[id]>=snapshots.get(id).choices.length).length};
}
