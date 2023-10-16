var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i;

for(i = 0; i < lines.length; i++) {
    if(lines[i] == 2002) {
        console.log("Acesso Permitido");
        break;
    } else {
        console.log("Senha invalida");
    }
}