var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n = Number(lines.shift());
let rpm = lines.shift().split(" ").map(Number);
let saida = 0;

for(let i = 1; i < n; i++) {
    if(rpm[i] < rpm[i - 1]) {
        saida = i + 1;
        break;
    }
}

console.log(saida);