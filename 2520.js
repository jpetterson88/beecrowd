var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let matriz = [];
let i, j;
let pos1Linha;
let pos1Coluna;
let pos2Linha;
let pos2Coluna;
let diferenca;

while(lines.length > 1) {
    let [linhas, colunas] = lines.shift().split(" ").map(Number);
    
    for(i = 0; i < linhas; i++) {
        matriz[i] = lines.shift().split(" ");
    }

    for(i = 0; i < linhas; i++) {
        for(j = 0; j < colunas; j++) {
            if(matriz[i][j] == '2') {
                pos2Linha = i;
                pos2Coluna = j;
            }
            if(matriz[i][j] == '1') {
                pos1Linha = i;
                pos1Coluna = j;
            }
        }
    }
    diferenca = Math.abs(pos1Linha - pos2Linha) + Math.abs(pos1Coluna - pos2Coluna);
    console.log(diferenca);
}