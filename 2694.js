var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n = lines.shift();
var i, j, ehNumero;
var soma;

for(i = 0; i < n; i++) {
    caracteres = lines[i];
    
    ehNumero = 0;
    ehLetra = 0;
    soma = 0;
    
    for(j = 0; j < caracteres.length; j++) {
        if(numero(caracteres[j])) {
            ehNumero += caracteres[j];
            if(caracteres.length - j == 1) {
                soma += Number(ehNumero);
            }
        } else {
            soma += Number(ehNumero);
            ehNumero = 0;
        }
    }
    console.log(soma);
}

function numero(caracter) {
    if(caracter.charCodeAt() >= 48 && caracter.charCodeAt() <= 57) {
        return true;
    }
    return false;
}