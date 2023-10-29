var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totCasos = Number(lines.shift());
let bonus, valorGolpeD, valorGolpeG;

for(let i = 0; i < totCasos * 3; i += 3) {
    bonus = Number(lines[i]);
    let [ataqueD, defesaD, levelD] = lines[i + 1].split(" ").map(Number);
    let [ataqueG, defesaG, levelG] = lines[i + 2].split(" ").map(Number);

    valorGolpeD = (ataqueD + defesaD) / 2;
    valorGolpeG = (ataqueG + defesaG) / 2;

    if(levelD % 2 === 0) valorGolpeD += bonus;
    if(levelG % 2 === 0) valorGolpeG += bonus;

    if(valorGolpeD > valorGolpeG) {
        console.log("Dabriel");
    } else if(valorGolpeD < valorGolpeG) {
        console.log("Guarte");
    } else {
        console.log("Empate");
    }
}