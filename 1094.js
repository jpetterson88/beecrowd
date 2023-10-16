var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var totCobaia = 0;
var totCoelho = 0;
var totRato = 0;
var totSapo = 0;
var percentualC;
var percentualR;
var percentualS;

for(var i = 0; i < n; i++) {
    var [a, b] = lines[i].split(" ");
    totCobaia += parseInt(a);
    if(b == 'C') {
        totCoelho += parseInt(a);
    } else if(b == 'R') {
        totRato += parseInt(a);
    } else if(b == 'S') {
        totSapo += parseInt(a);
    }
}

percentualC = (100 * totCoelho) / totCobaia;
percentualR = (100 * totRato) / totCobaia;
percentualS = (100 * totSapo) / totCobaia;

console.log(`Total: ${totCobaia} cobaias`);
console.log(`Total de coelhos: ${totCoelho}`);
console.log(`Total de ratos: ${totRato}`);
console.log(`Total de sapos: ${totSapo}`);
console.log(`Percentual de coelhos: ${percentualC.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentualR.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentualS.toFixed(2)} %`);