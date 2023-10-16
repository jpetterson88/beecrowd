var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vetor = lines[0].split(" ").map(item => parseInt(item));

var n1 = vetor.shift();
var n2 = vetor.shift();
var aux;

if(n1 < n2) {
    aux = n1;
    n1 = n2;
    n2 = aux;
}

if(n1 % n2 === 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}
    