var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(" ").map(item => Number(item));

var a = linha.shift();
var b = linha.shift();
var c = linha.shift();
var divisor = 2 * a;

if(divisor === 0 || (Math.pow(b, 2) - (4 * a * c)) < 0) {
    console.log("Impossivel calcular");
} else {
    var x1 = (- b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / divisor;
    var x2 = (- b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / divisor;
    console.log(`R1 = ${x1.toFixed(5)}`);
    console.log(`R2 = ${x2.toFixed(5)}`);
}