var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totJogadores = Number(lines.shift());
let nome; 
let totSaque = 0, totBloqueio = 0, totAtaque = 0;
let qtdeSaque = 0, qtdeBloqueio = 0, qtdeAtaque = 0;

for(let i = 0; i < totJogadores * 3; i += 3) {
    nome = lines[i];
    
    let [saques, bloqueios, ataques] = lines[i + 1].split(" ").map(Number);
    let [saqueCerto, blockCerto, ataqueCerto] = lines[i + 2].split(" ").map(Number);
    
    qtdeSaque += saques;
    qtdeBloqueio += bloqueios;
    qtdeAtaque += ataques;

    totSaque += saqueCerto;
    totBloqueio += blockCerto;
    totAtaque += ataqueCerto;
}

totSaque = (totSaque / qtdeSaque) * 100;
totBloqueio = (totBloqueio / qtdeBloqueio) * 100;
totAtaque = (totAtaque / qtdeAtaque) * 100;

console.log(`Pontos de Saque: ${totSaque.toFixed(2)} %.`);
console.log(`Pontos de Bloqueio: ${totBloqueio.toFixed(2)} %.`);
console.log(`Pontos de Ataque: ${totAtaque.toFixed(2)} %.`);