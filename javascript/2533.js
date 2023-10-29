var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totDisciplinas;
let i, totNotas, totCargaH;

while(lines.length > 1) {
    totDisciplinas = Number(lines.shift());
    totNotas = 0;
    totCargaH = 0;
    for(i = 0; i < totDisciplinas; i++) {
        let [nota, cargaH] = lines.shift().split(" ").map(Number);
        totNotas += nota * cargaH;
        totCargaH += cargaH;
    }
    console.log((totNotas / (totCargaH * 100)).toFixed(4));
}