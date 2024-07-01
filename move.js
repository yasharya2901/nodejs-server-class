const path = require('path');
const fs = require('fs');

const cmd_args = process.argv;

if (cmd_args.length != 4) {
    throw new Error("Insufficient Argument Provided");
}

const src_file_name = cmd_args[2];
const dest_file_path = cmd_arg[3];

const p = path.join(__dirname, src_file_name);
console.log(p);

const pathFile = path.join(__dirname, src_file_name);
fs.copyFile(pathFile, `${__dirname}/${dest_file_path}`, (err) => {
    if (err) throw err;
    console.log('The file has been copied!');
  });

fs.rm(pathFile,(err) => {
    if (err) throw err;
    console.log('The file has been deleted!');
})