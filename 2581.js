var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n = Number(lines.shift()); 

for(let i = 0; i < n; i++) {
    console.log("I am Toorg!");
}