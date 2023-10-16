var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var [valorAntigo, valorNovo] = lines[0].split(" ");
var total = ((valorNovo - valorAntigo) / valorAntigo) * 100;

console.log(`${total.toFixed(2)}%`);