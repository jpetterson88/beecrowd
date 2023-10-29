var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let lado = lines.shift().split(" ").map(Number);
lado.sort((a, b) => a - b);

if(lado[0] + lado[1] <= lado[2]) {
    console.log("Invalido");

} else if(lado[0] === lado[1] && 
          lado[1] === lado[2]) {
    console.log("Valido-Equilatero");
    retangulo(lado[0], lado[1], lado[2]);

} else if(lado[0] !== lado[1] && 
          lado[1] !== lado[2] && 
          lado[0] !== lado[2]) {
    console.log("Valido-Escaleno");
    retangulo(lado[0], lado[1], lado[2]);

} else {
    console.log("Valido-Isoceles");
    retangulo(lado[0], lado[1], lado[2]);
}

function retangulo(l1, l2, l3) {
    Math.pow(l1, 2) + Math.pow(l2, 2) === Math.pow(l3, 2) ? 
    console.log("Retangulo: S") : console.log("Retangulo: N");
}