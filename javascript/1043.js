var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [n1, n2, n3] = lines.shift().split(" ").map(Number);

let perimetro;
let area;

if(((n1 + n2) > n3) && ((n1 + n3) > n2) && ((n2 + n3) > n1)) {
    perimetro = n1 + n2 + n3;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    area = (n1 + n2) * n3 / 2.0;
    console.log(`Area = ${area.toFixed(1)}`);
}