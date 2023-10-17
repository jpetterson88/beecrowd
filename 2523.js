var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let letras;
let totLampadas;
let lamPiscadas;

while(lines.length > 1) {
    letras = lines.shift().split("");
}