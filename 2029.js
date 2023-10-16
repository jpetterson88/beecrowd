var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

const PI = 3.14;

for(var i = 0; i < lines.length - 1; i += 2) {
    let volume = Number(lines[i]);
    let diametro = Number(lines[i + 1]);

    let raio = diametro / 2;
    let areaDaboca = PI * Math.pow(raio, 2);
    let altura = volume / areaDaboca;

    console.log(`ALTURA = ${altura.toFixed(2)}`);
    console.log(`AREA = ${areaDaboca.toFixed(2)}`);
}