var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, j, simbolo, soma = "", total = 0;

for(i = 0; i < lines.length; i++) {
    simbolo = lines[i].split("");
    if(simbolo[0] == 'c') {
        console.log(total);
        total = 0;
        continue;
    }
    for(j = 0; j < simbolo.length; j++) {    
        if(simbolo[j] == '-') {
            soma += '0';
        } else {
            soma += '1';
        }
    }
    total += parseInt(soma, 2);
    soma = "";
}