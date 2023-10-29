var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(Number);

var totPar = 0;
var totImpar = 0;
var totPositivo = 0;
var totNegativo = 0;
var i;

for(i = 0; i < lines.length - 1; i++) {
    if(lines[i] % 2 === 0) {
        totPar += 1;
    } else {
        totImpar += 1;
    }
    
    if(lines[i] > 0) {
        totPositivo += 1;
    } else if(lines[i] < 0) {
        totNegativo += 1;
    }
}

console.log(`${totPar} valor(es) par(es)`);
console.log(`${totImpar} valor(es) impar(es)`);
console.log(`${totPositivo} valor(es) positivo(s)`);
console.log(`${totNegativo} valor(es) negativo(s)`);