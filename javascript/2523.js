var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let letras;
let totLampadas;
let lamPiscadas;
let i, j, texto;

while(lines.length > 1) {
    letras = lines.shift().split("");
    totLampadas = lines.shift();
    lamPiscadas = lines.shift().split(" ");
    texto = "";
    for(i = 0; i < totLampadas; i++) {
        for(j = 0; j < letras.length; j++) {
            if(lamPiscadas[i] == j + 1) {
                texto += letras[j];
            }
        }
    }
    console.log(texto);
}