var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var x = lines[0].split(" ").map(item => Number(item));
var i, pos, menor = x[0];

for(i = 0; i < n; i++) {
    if(x[i] < menor) {
        menor = x[i];
        pos = i;
    }
}

console.log(`Menor valor: ${menor}`);
console.log(`Posicao: ${pos}`);