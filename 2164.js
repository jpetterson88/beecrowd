var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n = Number(lines.shift());
let fibonacci = (Math.pow((1 + Math.sqrt(5)) / 2, n) - 
                 Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5);

console.log(fibonacci.toFixed(1));