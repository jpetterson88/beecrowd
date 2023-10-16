var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vetor = lines[0].split(" ").map(item => Number(item));

var horaInicial = vetor.shift();
var horaFinal = vetor.shift();
var total;

if(horaInicial > horaFinal) {
    total = 24 - (horaInicial - horaFinal)
    console.log(`O JOGO DUROU ${total} HORA(S)`);
} else if(horaInicial < horaFinal) {
    total = Math.abs(horaInicial - horaFinal);
    console.log(`O JOGO DUROU ${total} HORA(S)`);
} else if(horaInicial === horaFinal) {
    console.log("O JOGO DUROU 24 HORA(S)");
}