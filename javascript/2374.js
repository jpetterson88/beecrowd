var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

console.log(lines[0] - lines[1]);