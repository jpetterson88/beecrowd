var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let i, altura;
let totPermitido;

while(lines.length > 1) {
    let [totPessoas, altMin, altMax] = lines.shift().split(" ").map(Number);
    totPermitido = 0;
    
    for(i = 0; i < totPessoas; i++) {
        altura = Number(lines.shift());
        if(altura >= altMin && altura <= altMax) totPermitido += 1;
    }

    console.log(totPermitido);
}