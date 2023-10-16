var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [codigo1, peca1, valor1] = lines[0].split(" ").map(item => Number(item));
var [codigo2, peca2, valor2] = lines[1].split(" ").map(item => Number(item));

var total = (peca1 * valor1) + (peca2 * valor2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);