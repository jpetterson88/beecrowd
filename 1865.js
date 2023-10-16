var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var c = lines.shift();
var i, resposta;

for(i = 0; i < c; i++) {
    resposta = "";
    var [nome, forca] = lines[i].split(" ");
    if(nome == "Thor") {
        resposta = 'Y';
    } else {
        resposta = 'N';
    }
    console.log(resposta);
}
