var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var totCarneiros = lines.shift().split(" ").map(item => parseInt(item));
var totRoubados = 0;
var i, soma = 0, totN = 0;

for(i = 0; i < n && i >= 0; i++) {
    if(i > totN) {
        totN = i;
    }
    totRoubados += totCarneiros[i] - (totCarneiros[i] - 1);
    if(totCarneiros[i] % 2 !== 0) {
        if(totCarneiros[i] !== 0) {
            totCarneiros[i] -= 1;
        }
    } else {
        if(totCarneiros[i] !== 0) {
            totCarneiros[i] -= 1;
        }
        i -= 2;
    }
}

for(i = 0; i < n; i++) {
    soma += totCarneiros[i];
}

console.log(`${totN + 1} ${soma}`);