var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const TEMPO = 60;
const HORARIO_MARCADO = 480;
var totMinutos, atraso, i;

for(i = 0; i < lines.length - 1; i++) {
    var [horas, minutos] = lines[i].split(":").map(item => Number(item));
    horas = horas * 60;
    totMinutos = horas + minutos + TEMPO;
    atraso = HORARIO_MARCADO - totMinutos;
    if(atraso < 0) {
        console.log(`Atraso maximo: ${Math.abs(atraso)}`);
    } else {
        console.log("Atraso maximo: 0");
    }
}