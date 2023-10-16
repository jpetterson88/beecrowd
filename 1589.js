var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var t = lines.shift();
var i, soma;

for(i = 0; i < t; i++) {
    var [r1, r2] = lines[i].split(" ").map(item => parseInt(item));

    soma = r1 + r2;
    console.log(soma);
}