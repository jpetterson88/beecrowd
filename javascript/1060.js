var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var total = 0;

for(var valores of lines) {
    if(valores > 0) {
        total += 1;
    }
}   

console.log(`${total} valores positivos`);