var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let linhas = Number(lines.shift()) + 1;
let colunas = linhas;
let i, quadra = [], saida;

for(i = 0; i < linhas; i++) {
    quadra[i] = lines.shift().split(" ").map(Number);
}

for(i = 0; i < linhas - 1; i++) {
    saida = "";
    for(j = 0; j < colunas - 1; j++) {
        if(quadra[i][j] == 1 && quadra[i][j + 1] == 1 ||
           quadra[i][j] == 1 && quadra[i + 1][j] == 1 ||
           quadra[i][j] == 1 && quadra[i + 1][j + 1] == 1 ||
           quadra[i][j + 1] == 1 && quadra[i + 1][j] == 1 ||
           quadra[i][j + 1] == 1 && quadra[i + 1][j + 1] == 1 ||
           quadra[i + 1][j] == 1 && quadra[i + 1][j + 1] == 1) {
            saida += "S";
        } else {
            saida += "U";
        } 
    }
    console.log(saida);
}