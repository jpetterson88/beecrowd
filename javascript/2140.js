var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var notas = [2, 5, 10, 20, 50, 100];

for(let i = 0; i < lines.length; i++) {
    let [valor, pagamento] = lines[i].split(" ");
    if(valor == 0 && pagamento == 0) {
        break;
    }
    let troco = pagamento - valor;
    let j, z, positivo = 0;
    for(j = 0; j < notas.length - 1; j++) {
        for(z = 1; z < notas.length; z++) {
            if(notas[j] + notas[z] === troco) {
                positivo = 1;
                break;
            }
        }
        if(positivo === 1) {
            console.log("possible");
            break;
        } 
    }
    if(positivo === 0) {
        console.log("impossible");
    }
}