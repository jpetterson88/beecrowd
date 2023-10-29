var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i, j;
var soma;
var vetor1, vetor2;

for(i = 0; i < 3; i++) {
    var [x, y] = lines[i].split(" ").map(item => Number(item));
    if(x < y && x !== 0 && y !== 0) {
        soma = 0;
        vetor1 = [];
        for(j = x; j < y + 1; j++) {
            vetor1.push(j);
            soma += j;
        }
        console.log(`${vetor1.join(" ")} Sum=${soma}`);
    } else if(x > y && x !== 0 && y !== 0) {
        soma = 0;
        vetor2 = [];
        for(j = y; j < x + 1; j++) {
            vetor2.push(j);
            soma += j;
        }
        console.log(`${vetor2.join(" ")} Sum=${soma}`);
    }
}