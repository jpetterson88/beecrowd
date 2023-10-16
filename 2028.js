var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, j, numero;
var contador;
var sequencia;
var texto1;
var texto2;

for(i = 0; i < lines.length - 1; i++) {
    numero = parseInt(lines[i]);
    if(numero === 0) {
        texto1 = `Caso ${i + 1}: 1 numero`;
        contador++;
        console.log(texto1);
        console.log("0");
        console.log("");
        continue;
    }
    texto2 = [];
    contador = 0;
    for(j = 0; j <= numero; j++) {
        sequencia = 0;
        do {
            texto2.push(j);
            contador++;
            sequencia++;
        } while(sequencia < j);
    }
    texto1 = `Caso ${i + 1}: ${contador} numeros`;
    console.log(texto1);
    console.log(texto2.join(" "));
    console.log("");
}