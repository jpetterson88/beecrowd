var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

console.log(lines[1] * lines[0]);