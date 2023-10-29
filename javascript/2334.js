var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totPatos;

for(let i = 0; i < lines.length; i++) {
    totPatos = lines[i];
    if(totPatos == -1) {
        break;
    } else if(totPatos == 0) {
        console.log(0);
    } else if(totPatos >= Math.pow(10, 16)) {
        totPatos = totPatos.split("");
        totPatos = numeroGrande(totPatos);
        console.log(totPatos);
    } else {
        console.log(totPatos - 1);
    }
}

function numeroGrande(numero) {
    let ultimaPosicao = numero.length - 1;
    let primeiraPosicao, contadorDe0 = 0;

    for(let j = 1; j < numero.length; j++) {
        if(numero[0] == 1 && numero[j] == 0) {
            contadorDe0 += 1;
        } 
    }
    if(contadorDe0 == ultimaPosicao) {
        primeiraPosicao = numero.shift();
        ultimaPosicao -= 1;
    }
    if(numero[ultimaPosicao] == 0) {
        numero[ultimaPosicao] = '9';
        for(let i = ultimaPosicao - 1; i >= 0; i--) {
            if(numero[i] == 0) {
                numero[i] = '9';
            } else {
                numero[i] = numero[i] - 1;
                break;
            }
        }
    } else {
        numero[ultimaPosicao] = numero[ultimaPosicao] - 1;
    }
    numero = numero.join("");
    return numero;
}