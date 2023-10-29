var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var [x, y] = lines.shift().split(" "); 
var vetor = [];
var i, totI = 0;

vetor[0] = 1;

for(i = 1; i < y; i++) {
    vetor[i] = " " + (i + 1);
    totI += 1;
    if(totI == x) {
        vetor[i] = "\n" + (i + 1);
        totI = 0;
    }
}

console.log(vetor.join(""));