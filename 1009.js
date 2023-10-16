var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift().toUpperCase();
var salario = Number(lines.shift());
var totVendas = Number(lines.shift());
var totSalario = salario + (totVendas * 0.15);

console.log(`TOTAL = R$ ${totSalario.toFixed(2)}`);