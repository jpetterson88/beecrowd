var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totA = Number(lines.shift());
let repeticao = ""; 

for(let i = 0; i < totA; i++) {
    repeticao += "a";
}

console.log(`Feliz nat${repeticao}l!`);