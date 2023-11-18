var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let link3 = lines.shift();
let link2 = link3 * 2;
let link1 = link2 * 2;

console.log(link1);