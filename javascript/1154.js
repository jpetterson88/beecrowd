var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, totIdade = 0, totEntrada = 0;

for(i = 0; i < lines.length && lines[i] > 0; i++) {
    totIdade += Number(lines[i]);
    totEntrada += 1;
}

console.log((totIdade / totEntrada).toFixed(2));
