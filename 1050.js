var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift());

if(numero === 61) {
    console.log("Brasilia");
} else if(numero === 71) {
    console.log("Salvador");
} else if(numero === 11) {
    console.log("Sao Paulo");
} else if(numero === 21) {
    console.log("Rio de Janeiro");
} else if(numero === 32) {
    console.log("Juiz de Fora");
} else if(numero === 19) {
    console.log("Campinas");
} else if(numero === 27) {
    console.log("Vitoria");
} else if(numero === 31) {
    console.log("Belo Horizonte");
} else {
    console.log("DDD nao cadastrado");
}