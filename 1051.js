var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var imposto;

if(salario <= 2000) {
    console.log("Isento");
} else if(salario <= 3000) {
    salario = salario - 2000;
    imposto = salario * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
} else if(salario <= 4500) {
    salario = salario - 2000;
    salario = salario - 1000;
    imposto = 1000 * 0.08;
    imposto += salario * 0.18;
    console.log(`R$ ${imposto.toFixed(2)}`);
} else {
    salario = salario - 2000;
    salario = salario - 1000;
    imposto = 1000 * 0.08;
    salario = salario - 1500;
    imposto += (1500 * 0.18);
    imposto += salario * 0.28;
    console.log(`R$ ${imposto.toFixed(2)}`);
}