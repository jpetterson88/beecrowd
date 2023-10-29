var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var n = lines.shift();

var segundos = n;
var minutos = 0;
var horas = 0;

if(segundos <= 60) {
    segundos = segundos;
} else {
    minutos = segundos / 60;
    horas = minutos / 60;
    segundos = (minutos - parseInt(minutos)) * 60;
    minutos = (horas - parseInt(horas)) * 60;
}

console.log(`${parseInt(horas)}:${parseInt(minutos)}:${segundos.toFixed(0)}`);