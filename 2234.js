var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let [totHD, totP] = lines.shift().split(" ");

console.log((totHD / totP).toFixed(2));