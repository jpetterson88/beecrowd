var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var nota1 = lines.shift() * 3.5;
var nota2 = lines.shift() * 7.5;

var media = (nota1 + nota2) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
