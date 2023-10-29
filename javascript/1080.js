var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var posicao;
var maior = 0;
var i;

for(i = 0; i < 100; i++) {
    if(lines[i] > maior) {
        maior = lines[i];
        posicao = i + 1;
    }
}

console.log(maior);
console.log(posicao);