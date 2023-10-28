var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let x = 10;
let y = 20;

console.log(Math.min(x, y));
console.log(Math.max(x, y));