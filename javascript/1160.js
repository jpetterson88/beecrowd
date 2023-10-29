var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var t = lines.shift();
var i, popA, popB, totA;

for(i = 0; i < t; i++) {
    var [pa, pb, g1, g2] = lines[i].split(" ").map(item => Number(item));
    popA = pa + parseInt(pa * (g1 / 100));
    popB = pb + parseInt(pb * (g2 / 100));
    totA = 1;
    while(popA <= popB) {
        popA += parseInt(popA * (g1 / 100));
        popB += parseInt(popB * (g2 / 100));
        totA += 1;
        if(totA > 100) {
            break;
        }
    }
    if(totA <= 100) {
        console.log(`${totA} anos.`);
    } else {
        console.log("Mais de 1 seculo.");
    }
}