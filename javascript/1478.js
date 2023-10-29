var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n, l, c, i, vetor = [];
var valor, valor2 = 0;

for(i = 0; i < lines.length; i++) {
    n = lines[i];
    if(n == 0) {
        break;
    } else {
        for(l = 0; l < n; l++) {
            vetor[l] = [];
            valor = 1
            valor2 = l + 1;
            for(c = 0; c < n; c++) {
                if(l == c) {
                    vetor[l][c] = valor;
                } 
                if(l < c) {
                    valor++;
                    vetor[l][c] = valor;
                } 
                if(l > c) {
                    vetor[l][c] = valor2;
                    valor2--;
                }
                
                if(n - c == 1) {
                    vetor[l][c] = vetor[l][c].toString().padStart(3);
                } else {
                    vetor[l][c] = vetor[l][c].toString().padStart(3) + " ";
                }
            }
            console.log(vetor[l].join(""));
        }
        console.log("");
    }
}