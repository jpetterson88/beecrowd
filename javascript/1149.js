var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => Number(item));

var a = lines.shift();
var n, i, soma = 0;

for(i = 0; i < lines.length; i++) {
    if(lines[i] <= 0) {
        continue;
    } else {
        n = lines[i];
    }
}

for(i = 0; i < n; i++) {
    soma += (a + i);
}

console.log(soma);