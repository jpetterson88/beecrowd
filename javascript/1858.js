var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, menor = 20, posicao;
lines = lines[0].split(" ");

for(i = 0; i < n; i++) {
    if(lines[i] < menor) {
        menor = lines[i];
        posicao = i + 1;
    }
}

console.log(posicao);