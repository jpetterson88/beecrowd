var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();
var d = lines.shift();

var diferenca = (a * b) - (c * d);

console.log(`DIFERENCA = ${diferenca}`);