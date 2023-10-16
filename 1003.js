var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var a = lines.shift();
var b = lines.shift();

var soma = a + b;

console.log(`SOMA = ${soma}`);