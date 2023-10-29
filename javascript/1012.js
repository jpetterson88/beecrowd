var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseFloat(item));

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();
const pi = 3.14159;

var triRetangulo = (a * c) / 2;  
var circulo = pi * Math.pow(c, 2);
var trapezio = ((a + b) * c) / 2;
var quadrado = Math.pow(b, 2);
var retangulo = a * b;

console.log("TRIANGULO: " + triRetangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));