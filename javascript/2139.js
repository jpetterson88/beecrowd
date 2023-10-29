var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

const NATAL = 360;

var totDias;
var diasParaNatal;

for(var i = 0; i < lines.length; i++) {
    let [mes, dia] = lines[i].split(" ").map(item => Number(item));
    let dias = 0;
    for(let j = 1; j <= mes - 1; j++) {
        dias += meses(j);
    }
    totDias = dias + dia;
    diasParaNatal = NATAL - totDias;
    if(totDias === NATAL - 1) {
        console.log("E vespera de natal!");
    } else if(totDias < NATAL) {
        console.log(`Faltam ${diasParaNatal} dias para o natal!`);
    } else if(totDias > NATAL) {
        console.log("Ja passou!");
    } else if(totDias === NATAL) {
        console.log("E natal!");
    }
}

function meses(n) {
    switch(n) {
        case 2: return 29;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: return 31;
        case 4:
        case 6:
        case 9:
        case 11: return 30;
    }
}