var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var x = lines.shift();
var y = lines.shift();

var totCombustivel = x / y;

console.log(totCombustivel.toFixed(3) + " km/l");