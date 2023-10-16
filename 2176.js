var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let bits = lines.shift();
let contador = 0;

for(let i = 0; i < bits.length; i++) {
    if(bits[i] == "1") {
        contador += 1;
    }
}

if(contador % 2 === 0) {
    bits += "0";
} else {
    bits += "1";
}

console.log(bits);