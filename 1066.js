var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var totPar = 0;
var totImpar = 0;
var totPositivo = 0;
var totNegativo = 0;
var valor;

for(valor of lines) {
    if(valor % 2 === 0) {
        totPar += 1;
    } else {
        totImpar += 1;
    }
    
    if(valor > 0) {
        totPositivo += 1;
    } else if(valor < 0) {
        totNegativo += 1;
    }
}

console.log(`${totPar} valor(es) par(es)`);
console.log(`${totImpar} valor(es) impar(es)`);
console.log(`${totPositivo} valor(es) positivo(s)`);
console.log(`${totNegativo} valor(es) negativo(s)`);
