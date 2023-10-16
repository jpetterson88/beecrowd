var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(" ").map(item => Number(item));

var codigo = linha.shift();
var quantidade = linha.shift();
var valor;

switch(codigo) {
    case 1: 
        valor = 4.00 * quantidade;
        break;
    case 2:
        valor = 4.50 * quantidade;
        break;
    case 3: 
        valor = 5.00 * quantidade;
        break;
    case 4:
        valor = 2.00 * quantidade;
        break;
    case 5:
        valor = 1.50 * quantidade;
}

console.log(`Total: R$ ${valor.toFixed(2)}`);