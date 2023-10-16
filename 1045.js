var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => Number(item));

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();
var aux;

if(a < b) {
    aux = a;
    a = b;
    b = aux;
} 
if(b < c) {
    aux = b;
    b = c;
    c = aux;
}
if(a < b) {
    aux = a;
    a = b;
    b = aux;
}

if(a >= (b + c)) {
    console.log("NAO FORMA TRIANGULO");
} else if(Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log("TRIANGULO RETANGULO");
} else if(Math.pow(a, 2) > (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log("TRIANGULO OBTUSANGULO");
} else if(Math.pow(a, 2) < (Math.pow(b, 2) + Math.pow(c, 2))) {
    console.log("TRIANGULO ACUTANGULO");
}

if(a === b && a === c) {
    console.log("TRIANGULO EQUILATERO");
} else if((a === b && a !== c) || (a === c && a !== b) || (b === c && c !== a)) {
    console.log("TRIANGULO ISOSCELES");
}