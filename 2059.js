var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var [p, j1, j2, r, a] = lines.shift().split(" ").map(item => parseInt(item));
var soma = j1 + j2;

if(p === 1 && soma % 2 === 0 && r === 0 && a === 0 || 
    (r === 1 && a === 0 || r === 0 && a === 1)) {
    console.log("Jogador 1 ganha!");
} else if(p === 0 && soma % 2 !== 0 && r === 0 && a === 0 || 
    (r === 1 && a === 0 || r === 0 && a === 1)) {
    console.log("Jogador 1 ganha!");
} else {
    console.log("Jogador 2 ganha!");
}