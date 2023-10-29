var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var [t1, t2, t3, t4] = lines.shift().split(" ").map(item => parseInt(item));
var total = t1 - 1 + t2 - 1 + t3 - 1 + t4;

console.log(total);