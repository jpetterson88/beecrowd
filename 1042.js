var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(" ").map(item => Number(item));
var linha2 = [...linha];
var aux;

if(linha[0] > linha[1]) {
    aux = linha[0];
    linha[0] = linha[1];
    linha[1] = aux;
}
if(linha[1] > linha[2]) {
    aux = linha[1];
    linha[1] = linha[2];
    linha[2] = aux;
}
if(linha[0] > linha[1]) {
    aux = linha[0];
    linha[0] = linha[1];
    linha[1] = aux;
}

console.log(linha[0]);
console.log(linha[1]);
console.log(linha[2]);
console.log();
console.log(linha2[0]);
console.log(linha2[1]);
console.log(linha2[2]);