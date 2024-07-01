const fs = require('fs');
const path = require('path');


// const p = path.join(__dirname, 'file.txt');
// console.log(p);

// const pathFile = path.join(__dirname, __filename);
// fs.copyFile(pathFile, `${__dirname}/newDir2/${__filename}`, (err) => {
//     if (err) throw err;
//     console.log('The file has been copied!');
//   });

// fs.rm(pathFile,(err) => {
//     if (err) throw err;
//     console.log('The file has been deleted!');
// })

console.log(process.argv)



// const data = fs.readFileSync('file.txt');
// console.log("" + data);



// fs.writeFile('file.txt', "\n class is going on",{flag:'a'}, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// fs.mkdir('newDir', (err)=> {
//     if (err) throw err;
//     console.log('The directory has been created!');
// })

// fs.rename('newDir', 'newDir2', (err) => {
//     if (err) throw err;
//     console.log('The file has been renamed!');
// });


// fs.rmdir('newDir', { recursive: true }, (err) => {
//     if (err) {
//       throw err;
//     }
  
//     console.log("The directory " + 'newDir' + " is deleted.");
//   });