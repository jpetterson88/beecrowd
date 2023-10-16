var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var n = lines.shift();

var notasDe100 = parseInt(n / 100);
var restoDe100 = n % 100;

var notasDe50 = parseInt(restoDe100 / 50);
var restoDe50 = restoDe100 % 50;

var notasDe20 = parseInt(restoDe50 / 20);
var restoDe20 = restoDe50 % 20;

var notasDe10 = parseInt(restoDe20 / 10);
var restoDe10 = restoDe20 % 10;

var notasDe5 = parseInt(restoDe10 / 5);
var restoDe5 = restoDe10 % 5;

var notasDe2 = parseInt(restoDe5 / 2);
var restoDe2 = restoDe5 % 2;

var notasDe1 = parseInt(restoDe2 / 1);

console.log(n);
console.log(`${notasDe100} nota(s) de R$ 100,00`);
console.log(`${notasDe50} nota(s) de R$ 50,00`);
console.log(`${notasDe20} nota(s) de R$ 20,00`);
console.log(`${notasDe10} nota(s) de R$ 10,00`);
console.log(`${notasDe5} nota(s) de R$ 5,00`);
console.log(`${notasDe2} nota(s) de R$ 2,00`);
console.log(`${notasDe1} nota(s) de R$ 1,00`);