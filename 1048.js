var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var reajuste;

if(salario <= 400) {
    percentual = "15 %";
    reajuste = salario * 0.15;
    salario += reajuste;
} else if(salario <= 800) {
    percentual = "12 %";
    reajuste = salario * 0.12;
    salario += reajuste;
} else if(salario <= 1200) {
    percentual = "10 %";
    reajuste = salario * 0.10;
    salario += reajuste;
} else if(salario <= 2000) {
    percentual = "7 %";
    reajuste = salario * 0.07;
    salario += reajuste;
} else {
    percentual = "4 %";
    reajuste = salario * 0.04;
    salario += reajuste;
}

console.log(`Novo salario: ${salario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual}`);