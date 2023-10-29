var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var tipoDeCha = lines.shift();
var competidores = lines.shift().split(" ");
var acertos = 0, i;

for(i = 0; i < 5; i++) {
    if(competidores[i] == tipoDeCha) {
        acertos += 1;
    }
}

console.log(acertos);