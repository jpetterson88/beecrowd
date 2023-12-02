var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let totTuristas = 0;
let totVeiculos = 0;

for(let i = 0; i < lines.length; i++) {
    let [veiculos, turistas] = lines[i].split(" ");
    turistas = Number(turistas);

    if(veiculos == "SALIDA") {
        totVeiculos++;
        totTuristas += turistas;
    } else if(veiculos == "VUELTA") {
        totVeiculos--;
        totTuristas -= turistas;
    } else {
        break;
    }
}

console.log(totTuristas);
console.log(totVeiculos);