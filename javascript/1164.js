var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, j, x, soma;

for(i = 0; i < n; i++) {
    x = parseInt(lines[i]);
    soma = 0;
    for(j = 1; j < x; j++) {
        if(x % j === 0) {
            soma += j;
        }
    }
    if(soma === x) {
        console.log(`${x} eh perfeito`);
    } else {
        console.log(`${x} nao eh perfeito`);
    }
}