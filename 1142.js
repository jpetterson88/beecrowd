var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, valor = 0;

for(i = 0; i < n; i++) {
    valor += 1
    console.log(`${valor} ${++valor} ${++valor} PUM`);
    ++valor;
}