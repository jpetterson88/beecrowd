var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x1, y1] = lines[0].split(" ").map(item => Number(item));
var [x2, y2] = lines[1].split(" ").map(item => Number(item));

var x = Math.pow(x2 - x1, 2);
var y = Math.pow(y2 - y1, 2);

var distancia = Math.sqrt(x + y);

console.log(distancia.toFixed(4));