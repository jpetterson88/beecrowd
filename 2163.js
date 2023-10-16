var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let [linhas, colunas] = lines.shift().split(" ").map(Number);
let i, j;
let matriz = [];
let posicaoDaLinha = 0, posicaoDaColuna = 0;

for(i = 0; i < linhas; i++) {
    matriz[i] = lines.shift().split(" ").map(Number);
}

for(i = 1; i < linhas - 1; i++) {
    for(j = 1; j < colunas - 1; j++) {
        if(matriz[i][j] === 42 && 
        matriz[i - 1][j - 1] === 7 && matriz[i - 1][j] === 7 && 
        matriz[i - 1][j + 1] === 7 && matriz[i][j - 1] === 7 && 
        matriz[i][j + 1] === 7 && matriz[i + 1][j - 1] === 7 && 
        matriz[i + 1][j] === 7 && matriz[i + 1][j + 1] === 7) {
            posicaoDaLinha = i + 1;
            posicaoDaColuna = j + 1;
        }
    }
}

console.log(`${posicaoDaLinha} ${posicaoDaColuna}`);