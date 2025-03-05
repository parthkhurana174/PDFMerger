import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger();

export const mergePdfs = async (p1, p2) => {
  await merger.add(p1);  // Merge all pages. Parameter is the path to file and filename.
  await merger.add(p2);  // Merge only page 2 
  const d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); // Save under given name and reset the internal document
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};







// // const PDFMerger = require('pdf-merger-js');
// import PDFMerger from 'pdf-merger-js';
// var merger = new PDFMerger();

// const mergePdfs = async (p1, p2) => {
//   await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
//   await merger.add(p2); // merge only page 2 
//   let d = new Date().getTime()
//   await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
//   return d
//   // Export the merged PDF as a nodejs Buffer
//   // const mergedPdfBuffer = await merger.saveAsBuffer();
//   // fs.writeSync('merged.pdf', mergedPdfBuffer);
// } 

// module.exports = {mergePdfs}