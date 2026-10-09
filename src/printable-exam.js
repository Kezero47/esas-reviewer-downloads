// Native WordprocessingML export, packaged as an uncompressed ZIP for offline use.
export const EXAM_PRICE = 249;
export const EXAM_PRODUCT = 'printable-exam';
export const DOCX_MIME = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const xml = value => String(value ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export function examQuestions(bank, {subjects = [], sources = [], type = 'All'} = {}) {
  return bank.filter(q => q.quality === 'ready' && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices?.length && (!subjects.length || subjects.includes(q.subject)) && (!sources.length || sources.includes(q.sourceId)) && (type === 'All' || q.type === type));
}
export function sourceQuestionFolders(bank, subjectId, registry) {
  const questions = bank.filter(q => q.subject === subjectId);
  return [...new Set(questions.map(q => q.sourceId))].map(id => ({id, title:registry.find(s => s.id === id)?.title || id, count:questions.filter(q => q.sourceId === id).length}));
}
function paragraph(text, {bold = false, center = false, keep = false, before = 0} = {}) {
  return `<w:p><w:pPr>${center?'<w:jc w:val="center"/>':''}${keep?'<w:keepNext/>':''}<w:keepLines/><w:spacing w:before="${before}" w:after="0" w:line="252" w:lineRule="auto"/></w:pPr><w:r><w:rPr>${bold?'<w:b/>':''}</w:rPr>${String(text??'').split(/\r\n|\r|\n/).map(line=>`<w:t xml:space="preserve">${xml(line)}</w:t>`).join('<w:br/>')}</w:r></w:p>`;
}
function section(columns, type = '') {
  return `<w:sectPr>${type?`<w:type w:val="${type}"/>`:''}<w:pgSz w:w="12240" w:h="18500"/><w:pgMar w:top="576" w:right="720" w:bottom="792" w:left="720" w:header="288" w:footer="288"/><w:cols w:num="${columns}" w:space="490"/></w:sectPr>`;
}
export function examDocumentXml(questions, options = {}) {
  if (!questions.length || questions.some(q => !examQuestions([q]).length)) throw new Error('Select questions with verified answer keys.');
  const columns = Number(options.columns) === 2 ? 2 : 1;
  const header = [options.institution, options.department, options.course, options.title || 'ESAS PRACTICE EXAM', options.set ? `SET ${options.set}` : ''].filter(Boolean).map(t => paragraph(t,{bold:true,center:true})).join('');
  const instructions = paragraph('Name: ______________________________   Section: __________   Score: __________',{before:120}) + paragraph('Instruction: Select the correct answer for each question. Mark only one answer per item.',{before:120}) + paragraph('MULTIPLE CHOICE',{bold:true,before:120});
  const headerEnd = `<w:p><w:pPr>${section(1)}</w:pPr></w:p>`;
  const body = questions.map((q,i) => paragraph(`${i+1}. ${q.prompt}`,{keep:true,before:100}) + q.choices.map((c,j) => paragraph(`${String.fromCharCode(65+j)}. ${c}`,{keep:j<q.choices.length-1})).join('')).join('');
  const questionsEnd = `<w:p><w:pPr>${section(columns,'continuous')}</w:pPr></w:p>`;
  const answerRows = [];
  for (let i = 0; i < questions.length; i += 4) {
    answerRows.push('<w:tr>' + questions.slice(i,i+4).map((q,j) => `<w:tc><w:tcPr><w:tcW w:w="2700" w:type="dxa"/></w:tcPr>${paragraph(`${i+j+1}. ${String.fromCharCode(65+q.answer)}`)}</w:tc>`).join('') + '</w:tr>');
  }
  const answers = paragraph('ANSWER KEY',{bold:true,center:true}) + paragraph(options.title || 'ESAS PRACTICE EXAM',{center:true}) + `<w:tbl><w:tblPr><w:tblW w:w="10800" w:type="dxa"/></w:tblPr><w:tblGrid>${'<w:gridCol w:w="2700"/>'.repeat(4)}</w:tblGrid>${answerRows.join('')}</w:tbl><w:p/>`;
  // A nextPage section starts the answer key in a full-width page after the exam.
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${header}${instructions}${headerEnd}${body}${questionsEnd}${answers}${section(1,'nextPage')}</w:body></w:document>`;
}
const encoder = new TextEncoder();
function crc32(bytes) { let crc = 0xffffffff; for (const byte of bytes) {crc ^= byte; for(let i=0;i<8;i++)crc=(crc>>>1)^((crc&1)?0xedb88320:0);} return (crc^0xffffffff)>>>0; }
function zip(files) {
  const parts=[], central=[]; let offset=0;
  for (const [name,text] of Object.entries(files)) {
    const n=encoder.encode(name), b=encoder.encode(text), crc=crc32(b);
    const local=new Uint8Array(30+n.length+b.length), v=new DataView(local.buffer);
    v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint32(14,crc,true);v.setUint32(18,b.length,true);v.setUint32(22,b.length,true);v.setUint16(26,n.length,true);local.set(n,30);local.set(b,30+n.length);
    const entry=new Uint8Array(46+n.length), c=new DataView(entry.buffer);
    c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint32(16,crc,true);c.setUint32(20,b.length,true);c.setUint32(24,b.length,true);c.setUint16(28,n.length,true);c.setUint32(42,offset,true);entry.set(n,46);
    parts.push(local);central.push(entry);offset+=local.length;
  }
  const size=central.reduce((sum,p)=>sum+p.length,0),end=new Uint8Array(22),e=new DataView(end.buffer);
  e.setUint32(0,0x06054b50,true);e.setUint16(8,central.length,true);e.setUint16(10,central.length,true);e.setUint32(12,size,true);e.setUint32(16,offset,true);
  const result=new Uint8Array(offset+size+22);let cursor=0;for(const p of [...parts,...central,end]){result.set(p,cursor);cursor+=p.length;}return result;
}
export function createExamDocx(questions, options = {}) {
  return zip({
    '[Content_Types].xml':'<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>',
    '_rels/.rels':'<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
    'word/_rels/document.xml.rels':'<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
    'word/styles.xml':'<?xml version="1.0"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="20"/></w:rPr></w:rPrDefault></w:docDefaults></w:styles>',
    'word/document.xml':examDocumentXml(questions, options)
  });
}
