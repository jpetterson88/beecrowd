var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let minutos = Number(lines.shift());
let [minutos1, minutos2] = lines.shift().split(" ").map(Number);

let totMinutos = minutos1 + minutos2;

totMinutos > minutos ? console.log("Deixa para amanha!") : console.log("Farei hoje!");