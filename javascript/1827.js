var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var i, n;
var l, c, vetor = [];

for(i = 0; i < lines.length - 1; i++) {
    n = lines[i];
    for(l = 0; l < n; l++) {
        vetor[l] = [];
        for(c = 0; c < n; c++) {
            vetor[l][c] = 0;
            if(l == c) {
                vetor[l][c] = 2;
            }
            if(l + c == n - 1) {
                vetor[l][c] = 3;
            }
            if(l >= Math.floor(n / 3) && l < n - Math.floor(n / 3) && c >= Math.floor(n / 3) && c < n - Math.floor(n / 3)) {
                vetor[l][c] = 1;
            }
            if(l == Math.floor(n / 2) && c == Math.floor(n / 2)) {
                vetor[l][c] = 4
            }
        }
        console.log(vetor[l].join(""));
    }
    console.log("");
}