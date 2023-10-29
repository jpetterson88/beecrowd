var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n, l, c, i, vetor = [];
var inicio, fim;

for(i = 0; i < lines.length; i++) {
    n = lines[i];
    if(n == 0) {
        break;
    } else {
        for(l = 0; l < n; l++) {
            vetor[l] = [];
            for(c = 0; c < n; c++) {
                vetor[l][c] = 1;
                for(inicio = 0, fim = 1; inicio < Math.floor(n / 2); inicio++, fim++) {
                    if(l > inicio && l < n - fim && c > inicio && c < n - fim) {
                        vetor[l][c] += 1;
                    }
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