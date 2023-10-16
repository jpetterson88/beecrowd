var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, resultado = "";
var frase = "LIFE IS NOT A PROBLEM TO BE SOLVED";

for(i = 0; i < n; i++) {
    resultado += frase[i];
}

console.log(resultado);