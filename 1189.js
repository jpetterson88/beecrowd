var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var t = lines.shift();
var i, j, m = [];
var soma = 0, contador = 0, media, l = 1;

for(i = 0; i < 12; i++) {
    m[i] = [];
    for(j = 0; j < 12; j++) {
        m[i][j] = parseFloat(lines.shift());
    }
}

for(j = 0; j <= 4; j++) {
    for(i = 0 + l; i <= 11 - l; i++) {
        soma += m[i][j];
        contador += 1;
    }
    ++l;
}

if(t == 'S') {
    console.log(soma.toFixed(1));
} else {
    media = soma / contador;
    console.log(media.toFixed(1));
}