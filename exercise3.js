let fs = require('fs');

let fin = fs.readFileSync(process.argv[2]);
let lines = fin.toString().split('\n').length - 1;

console.log(lines);
