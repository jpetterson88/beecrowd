var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let numero = lines.shift();
let p = numero / Math.log(numero);
let m = (1.25506 * numero) / Math.log(numero);
console.log(`${p.toFixed(1)} ${m.toFixed(1)}`);