var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift();
let placa;
let dia;
const REGEX = /^[A-Z]{3}-\d{4}$/;

for(let i = 0; i < n; i++) {
    placa = lines[i];
    if(REGEX.test(placa)) {
        switch(placa[7]) {
            case '1':
            case '2': dia = "MONDAY"; 
                break;
            case '3':
            case '4': dia = "TUESDAY";
                break;
            case '5':
            case '6': dia = "WEDNESDAY";
                break;
            case '7':
            case '8': dia = "THURSDAY";
                break;
            case '9':
            case '0': dia = "FRIDAY";
        }
    } else {
        dia = "FAILURE";
    }
    console.log(dia);
}