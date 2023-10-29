var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let x, y;
let distancia, totRaio;

for(let i = 0; i < lines.length - 1; i++) {
    let [xf, yf, xi, yi, vi, r1, r2] = lines[i].split(" ").map(Number);

    x = Math.pow(xf - xi, 2);
    y = Math.pow(yf - yi, 2);

    distancia = Math.sqrt(x + y) + (vi * 1.5);
    totRaio = r1 + r2;

    if(distancia <= totRaio) {
        console.log("Y");
    } else {
        console.log("N");
    }
}