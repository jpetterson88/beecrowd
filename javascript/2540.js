var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totJogadores;
let votos, sim;
let i;

while(lines.length > 1) {
    totJogadores = Number(lines.shift());
    votos = lines.shift().split(" ").map(Number);
    sim = 0;

    for(i = 0; i < totJogadores; i++) {
        if(votos[i] == 1) sim += 1;
    }

    sim >= (totJogadores / 3) * 2 ? 
    console.log("impeachment") : console.log("acusacao arquivada");
}