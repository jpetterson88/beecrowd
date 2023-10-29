var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var t = lines.shift();
var i, j, m = [];
var soma = 0, contador = 0, media, n = 0;

for(i = 0; i < 12; i++) {
    m[i] = [];
    for(j = 0; j < 12; j++) {
        m[i][j] = parseFloat(lines.shift());
    }
}

for(i = 11; i > 0; i--) {
    for(j = n + 1; j <= 11; j++) {
        soma += m[i][j];
        contador += 1;
    }
    ++n;
}

if(t == 'S') {
    console.log(soma.toFixed(1));
} else {
    media = soma / contador;
    console.log(media.toFixed(1));
}