var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totCasos = Number(lines.shift());
let i, soma;

for(i = 0; i < totCasos; i++) {
    let [n1, n2] = lines.shift().split(" ").map(Number);
    soma = n1 + n2;

    switch(soma) {
        case 0: console.log("PROXYCITY"); break;
        case 1: console.log("P.Y.N.G."); break;
        case 2: console.log("DNSUEY!"); break;
        case 3: console.log("SERVERS"); break;
        case 4: console.log("HOST!"); break;
        case 5: console.log("CRIPTONIZE"); break;
        case 6: console.log("OFFLINE DAY"); break;
        case 7: console.log("SALT"); break;
        case 8: console.log("ANSWER!"); break;
        case 9: console.log("RAR?"); break;
        case 10: console.log("WIFI ANTENNAS");
    }
}