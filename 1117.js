var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var nota, total = 0, controle = 0, media;
var i;

for(i = 0; i < lines.length; i++) {
    nota = Number(lines[i]);
    if(nota >= 0 && nota <= 10) {
        total += nota;
        controle += 1;
        if(controle === 2) {
            break;
        }
    } else {
        console.log("nota invalida");
    }
}

media = total / 2;
console.log(`media = ${media.toFixed(2)}`);