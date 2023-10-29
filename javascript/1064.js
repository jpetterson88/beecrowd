var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => Number(item));

var totPositivo = 0, valor, media = 0;

for(valor of lines) {
    if(valor > 0) {
        totPositivo += 1;
        media += valor;
    }
}

media = media / totPositivo;

console.log(`${totPositivo} valores positivos`);
console.log(`${media.toFixed(1)}`);