var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, aux;

for(i = 0, j = 19; i < 10; i++, j--) {
    aux = lines[i];
    lines[i] = lines[j];
    lines[j] = aux;
}

for(i = 0; i < 20; i++) {
    console.log(`N[${i}] = ${lines[i]}`);
}

