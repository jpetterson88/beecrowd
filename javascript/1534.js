var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var l, c, i, n, vetor = [];

for(i = 0; i < lines.length; i++) {
    n = lines[i];
    if(n == "EOF") {
        break;
    } else {
        for(l = 0; l < n; l++) {
            vetor[l] = [];
            for(c = 0; c < n; c++) {
                vetor[l][c] = 3;
                if(l == c) {
                    vetor[l][c] = 1;
                }
                if(l + c == n - 1) {
                    vetor[l][c] = 2;
                } 
            }
            console.log(vetor[l].join(""));
        } 
    }
}