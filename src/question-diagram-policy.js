// Known source diagrams belong to full source-specific question IDs, never bare item numbers.
export const bookDiagramSource='strength-reviewer-book-undated-esas-book-chapter-3-test-3';
export const bookDiagramNumbers=Object.freeze([5, 17, 31, 32, 33, 34, 36, 42, 44, 46, 50]);
export const bookDiagramBindings=Object.freeze(Object.fromEntries(bookDiagramNumbers.map(number=>[`Assets_ESAS_Book/esas-book-test3-question-${number}.png`,{questionId:`${bookDiagramSource}-chapter-3-test-3-${number}`,sourceId:bookDiagramSource}])));
export function diagramBelongsToQuestion(question,path){
 const binding=bookDiagramBindings[path];
 if(binding)return question.id===binding.questionId&&question.sourceId===binding.sourceId;
 // A new image in this source namespace needs an explicit ownership review.
 return !String(path).startsWith('Assets_ESAS_Book/esas-book-test3-question-');
}
