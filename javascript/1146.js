var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, j;
var vetor;

for(i = 0; i < lines.length; i++) {
    if(lines[i] == 0) {
        break;
    } else {
        vetor = [];
        for(j = 0; j < lines[i]; j++) {
            vetor[j] = j + 1;
        }
    }
    console.log(vetor.join(" "));
}