var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var nota, total = 0, controle = 0, media, resposta;
var i;

for(i = 0; i < lines.length; i++) {
    nota = Number(lines[i]);
    if(nota >= 0 && nota <= 10) {
        total += nota;
        controle += 1;
        if(controle === 2) {
            media = total / 2;
            console.log(`media = ${media.toFixed(2)}`);
            total = 0;
            controle = 0;
            do {
                resposta = lines[++i];
                console.log("novo calculo (1-sim 2-nao)")
                if(resposta == 2) {
                    break;
                }
            } while(resposta < 1 || resposta > 2);
        }
    } else {
        console.log("nota invalida");
    }
}