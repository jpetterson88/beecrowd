var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var totPar = 0;
var valor;

for(valor of lines) {
    if(valor % 2 === 0) {
        totPar += 1;
    }
}

console.log(`${totPar} valores pares`);