var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseInt(item));

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();

var maior = (a + b + Math.abs(a - b)) / 2;

if (maior > c) {
    maior = maior
} else {
    maior = c;
}

console.log(maior + " eh o maior");