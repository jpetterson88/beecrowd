var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var qt = lines.shift();
var i, soma;

for(i = 0; i < qt * 2; i += 2) {
    var [nome1, escolha1, nome2, escolha2] = lines[i].split(" ");
    var [n1, n2] = lines[i + 1].split(" ").map(item => parseInt(item));
    soma = n1 + n2;
    if(soma % 2 === 0) {
        if(escolha1 == 'PAR') {
            console.log(nome1);
        } else {
            console.log(nome2);
        }
    } else {
        if(escolha1 == 'IMPAR') {
            console.log(nome1);
        } else {
            console.log(nome2);
        }
    }
}