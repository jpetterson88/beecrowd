var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let nota = Number(lines.shift());

if(nota < 1) {
    console.log("E");
} else if(nota <= 35) {
    console.log("D");
} else if(nota <= 60) {
    console.log("C");
} else if(nota <= 85) {
    console.log("B");
} else if(nota <= 100) {
    console.log("A");
}