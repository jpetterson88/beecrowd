var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var totAlunos = lines.shift();
var i, escolhido, maior = 0;

for(i = 0; i < totAlunos; i++) {
    var [matricula, nota] = lines[i].split(" ").map(item => Number(item));
    if(nota > maior) {
        maior = nota;
        escolhido = matricula;
    }
}

if(maior >= 8) {
    console.log(escolhido);
} else {
    console.log("Minimum note not reached");
}