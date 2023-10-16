var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var x = lines.shift();
var i, z, soma = 0, totSoma = 0;

for(i = 0; i < lines.length; i++) {
    if(lines[i] <= x) {
        continue;
    } else {
        z = lines[i];
        break;
    }
}

for(i = x; i < z; i++) {
    soma += i;
    totSoma += 1;
    if(soma > z) {
        console.log(totSoma);
        break;
    }
}