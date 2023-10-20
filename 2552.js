var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let arr = [];
let i, j;
let contador;

while(lines.length > 1) {
    let [linhas, colunas] = lines.shift().split(" ").map(Number);

    for(i = 0; i < linhas; i++) {
        arr[i] = lines.shift().split(" ");
    }

    for(i = 0; i < linhas; i++) {
        texto = "";
        for(j = 0; j < colunas; j++) {
            if(arr[i][j] == '1') {
                texto += '9';
            } else {
                contador = 0;
                if(i > 0 && arr[i - 1][j] == '1') contador += 1;
                if(i < linhas - 1 && arr[i + 1][j] == '1') contador += 1;
                if(j > 0 && arr[i][j - 1] == '1') contador += 1;
                if(j < colunas - 1 && arr[i][j + 1] == '1') contador += 1;
                texto += contador.toString();
            }
        }
        console.log(texto);
    }
}