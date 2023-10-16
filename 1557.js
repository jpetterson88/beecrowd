var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var i, n;
var l, c, vetor = [], valor, ultimo, linha;

for(i = 0; i < lines.length; i++) {
    n = lines[i];
    if(n == 0) {
        break;
    } else {
        valor = 1;
        linha = 1
        for(l = 0; l < n; l++) {
            vetor[l] = [];
            for(c = 0; c < n; c++) {
                vetor[l][c] = valor;
                valor *= 2;
                ultimo = vetor[l][c].toString();
            }
            valor = linha * 2;
            linha *= 2;
        }
        for(l = 0; l < n; l++) {
            for(c = 0; c < n; c ++) {
                if(n - c == 1) {
                    vetor[l][c] = vetor[l][c].toString().padStart(ultimo.length); 
                } else {
                    vetor[l][c] = vetor[l][c].toString().padStart(ultimo.length) + " "; 
                }
            }
            console.log(vetor[l].join(""));
        }
        console.log("");
    }
}