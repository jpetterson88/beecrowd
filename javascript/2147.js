var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let c = Number(lines.shift());

for(let i = 0; i < c; i++) {
    let tempo = lines[i].length / 100;
    console.log(tempo.toFixed(2));
}