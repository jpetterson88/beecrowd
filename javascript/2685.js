var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let grau;

while(lines.length > 1) {
    grau = lines.shift();
    if(grau < 90 || grau == 360) {
        console.log("Bom Dia!!");
    } else if(grau < 180) {
        console.log("Boa Tarde!!");
    } else if(grau < 270) {
        console.log("Boa Noite!!");
    } else {
        console.log("De Madrugada!!");
    }
}