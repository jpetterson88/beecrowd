var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totTreinos;
let i, media, maior;

while(lines.length > 1) {
    totTreinos = Number(lines.shift());
    maior = 0;
    contador = 0;

    for(i = 0; i < totTreinos; i++) {
        let [duracao, distancia] = lines.shift().split(" ").map(Number);
        media = distancia / duracao;
        if(media > maior) {
            maior = media;
            console.log(i + 1);
        }
    }
}