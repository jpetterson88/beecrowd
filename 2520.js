var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let matriz = [];
let i, j;
let dois, um;

while(lines.length > 1) {
    let [linhas, colunas] = lines.shift().split(" ").map(Number);
    
    for(i = 0; i < linhas; i++) {
        matriz[i] = lines.shift().split(" ");
    }

    for(i = 0; i < linhas; i++) {
        for(j = 0; j < colunas; j++) {
            if(matriz[i][j] == '2') {
                dois = 
            }
        }
    }
}