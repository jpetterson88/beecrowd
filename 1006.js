var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var nota1 = lines.shift() * 2;
var nota2 = lines.shift() * 3;
var nota3 = lines.shift() * 5;

var media = (nota1 + nota2 + nota3) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);