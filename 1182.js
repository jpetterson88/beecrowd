var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var c = lines.shift();
var t = lines.shift();
var i, j, m = [];
var soma = 0, media;

for(i = 0; i < 12; i++) {
    m[i] = [];
    for(j = 0; j < 12; j++) {
        m[i][j] = parseFloat(lines.shift());
    }
}

for(i = 0; i < 12; i++) {
    soma += m[i][c];
}

if(t == 'S') {
    console.log(soma.toFixed(1));
} else {
    media = soma / 12;
    console.log(media.toFixed(1));
}