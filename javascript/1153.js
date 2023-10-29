var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, fatorial = 1;

for(i = n; i > 0; i--) {
    fatorial *= i;
}

console.log(fatorial);