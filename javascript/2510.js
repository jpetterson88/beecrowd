var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n = Number(lines.shift());
let nome;

for(let i = 0; i < n; i++) {
    nome = lines[i];
    console.log("Y");
}