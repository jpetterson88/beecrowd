var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numFuncionario = Number(lines.shift());
var horasTrabalhadas = Number(lines.shift());
var valorHora = Number(lines.shift());
var salario = valorHora * horasTrabalhadas;

console.log(`NUMBER = ${numFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);