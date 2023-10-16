var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var totJogos = 0; 
var totInter = 0;
var totGremio = 0;
var totEmpates = 0;
var i, resposta;

for(i = 0; i < lines.length; i++) {
    var [inter, gremio] = lines[i].split(" ");
    totJogos += 1;
    if(inter > gremio) {
        totInter += 1;
    } else if(gremio > inter) {
        totGremio += 1;
    } else {
        totEmpates += 1;
    }
    resposta = lines[++i];
    console.log("Novo grenal (1-sim 2-nao)");
    if(resposta == 2) {
        console.log(`${totJogos} grenais`);
        console.log(`Inter:${totInter}`);
        console.log(`Gremio:${totGremio}`);
        console.log(`Empates:${totEmpates}`);
        if(totInter > totGremio) {
            console.log("Inter venceu mais");
        } else if(totInter < totGremio){
            console.log("Gremio venceu mais");
        } else {
            console.log("Nao houve vencedor");
        }
        break;
    }
}