var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totP = Number(lines.shift());
let nome, grauD, notas, totNotas;

for(let i = 0; i < totP * 3; i += 3) {
    nome = lines[i];
    grauD = Number(lines[i + 1]);
    notas = lines[i + 2].split(" ").map(Number);
    totNotas = 0;
    
    notas.sort((a, b) => a - b);
    notas.splice(0, 1);
    notas.splice(notas.length - 1, 1);
    
    notas.forEach(nota => totNotas += nota);
    totNotas *= grauD;

    console.log(`${nome} ${totNotas.toFixed(2)}`);
}