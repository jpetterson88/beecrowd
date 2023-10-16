var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(" ").map(item => Number(item));

var a = linha.shift();
var b = linha.shift();
var c = linha.shift();
var d = linha.shift();

if((b > c) && (d > a) && ((c + d) > (a + b)) && (c > 0) && (d > 0) && (a % 2 === 0)) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}