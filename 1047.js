var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => Number(item));

var horaInicial = lines.shift();
var minutoInicial = lines.shift();
var horaFinal = lines.shift();
var minutoFinal = lines.shift();

var totalHora;
var totalMinuto;

if(minutoInicial < minutoFinal) {
    totalMinuto = Math.abs(minutoInicial - minutoFinal);
} else if(minutoInicial > minutoFinal) {
    totalMinuto = 60 - (minutoInicial - minutoFinal);
} else if(minutoInicial === minutoFinal) {
    totalMinuto = 0;
}

if((horaInicial < horaFinal) && (minutoInicial > minutoFinal)) {
    totalHora = Math.abs(horaInicial - horaFinal) - 1;
} else if (horaInicial < horaFinal) {
    totalHora = Math.abs(horaInicial - horaFinal);
} else if((horaInicial > horaFinal) && (minutoInicial > minutoFinal)) {
    totalHora = 24 - (horaInicial - horaFinal) - 1;
} else if(horaInicial > horaFinal) {
    totalHora = 24 - (horaInicial - horaFinal);
} else if((horaInicial === horaFinal) && (minutoInicial > minutoFinal)) {
    totalHora = 24 - 1;
} else if((horaInicial === horaFinal) && (minutoFinal !== minutoInicial)) {
    totalHora = 0;
} else if(horaInicial === horaFinal) {
    totalHora = 24;
}

console.log(`O JOGO DUROU ${totalHora} HORA(S) E ${totalMinuto} MINUTO(S)`);