var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [totF, totB, totM] = lines.shift().split(" ").map(Number);
let [frango, bife, massa] = lines.shift().split(" ").map(Number);

let totResto = 0;

if(totF - frango < 0) {
    totResto += totF - frango;
}

if(totB - bife < 0) {
    totResto += totB - bife;
}

if(totM - massa < 0) {
    totResto += totM - massa;
}

console.log(Math.abs(totResto));