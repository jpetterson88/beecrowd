var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var caso = 1;

for(let i = 0; i < lines.length - 1; i += 2) {
    let n1 = lines[i];
    let n2 = lines[i + 1];
    let totSubs = 0;
    let numero = "";
    let j = 0, posicao = 0;
    while(j < n2.length) {
        numero += n2[j];
        j++;
        if(numero.includes(n1)) {
            totSubs += 1;
            posicao = (j - n1.length) + 1;
            numero = "";
        }
    }
    console.log(`Caso #${caso}:`);
    if(posicao === 0) {
        console.log("Nao existe subsequencia");
    } else {
        console.log(`Qtd.Subsequencias: ${totSubs}`);
        console.log(`Pos: ${posicao}`);
    }
    console.log("");
    caso += 1;
}