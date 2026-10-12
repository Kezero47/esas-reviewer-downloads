// Owner instruction, revision 3: red choices in the supplied screenshots are correct.
export const answerCorrections = Object.freeze({
 'past-2025-exam-14-exam-14-52': 0,
 'past-2025-exam-14-exam-14-45': 3,
 'past-2025-exam-16-exam-16-2': 3,
 'past-2025-exam-16-exam-16-10': 0,
 'past-2025-exam-14-exam-14-64': 3,
});
export function correctAnswer(q) {
 if(!Object.hasOwn(answerCorrections,q.id))return q;
 return {...q, previousAnswer:q.answer, answer:answerCorrections[q.id], quality:'ready',
 answerSource:'Owner-confirmed revision 3 screenshot (red choice)',
 explanation:'Correct answer: '+q.choices[answerCorrections[q.id]],
 sourceNote:'Owner corrected the answer in revision 3. Original source record retained.'};
}
