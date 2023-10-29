var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n = parseInt(lines.shift());

console.log(n.toString(16).toUpperCase());