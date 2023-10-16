var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let total = Number(lines.shift());
let valor = lines.shift().split(" ").map(Number);
let iguais, pico = 0, vale = 0;

for(let i = 0; i < total - 1; i++) {
    if(valor[i] === valor[i + 1]) {
        iguais = 0;
        break;
    } 
    
    if(valor[i] < valor[i + 1]) {
        pico++;
    } else {
        pico = 0;
    }

    if(valor[i] > valor[i + 1]) {
        vale++;
    } else {
        vale = 0;
    }

    if(pico === 2 || vale === 2) {
        iguais = 0;
        break;
    }
}

if(iguais === 0) {
    console.log(iguais);
} else {
    console.log(1);
}