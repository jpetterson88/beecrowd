var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n = lines.shift();

for(var i = 0; i < n * 2; i += 2) {
    let p1 = lines[i];
    let p2 = lines[i + 1];

    if(p1 == "ataque" && p2 == "pedra") {
        console.log("Jogador 1 venceu");
    } else if(p1 == "pedra" && p2 == "papel") {
        console.log("Jogador 1 venceu");
    } else if(p1 == "ataque" && p2 == "papel") {
        console.log("Jogador 1 venceu");
    } else if(p1 == "papel" && p2 == "papel") {
        console.log("Ambos venceram");
    } else if(p1 == "pedra" && p2 == "pedra") {
        console.log("Sem ganhador");
    } else if(p1 == "ataque" && p2 == "ataque") {
        console.log("Aniquilacao mutua");
    } else {
        console.log("Jogador 2 venceu");
    }
}