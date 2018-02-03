var fs = require('fs');

var str = fs.readFileSync(process.argv[2], 'utf-8');
var lines = str.split('\n').length - 1;
console.log(lines);