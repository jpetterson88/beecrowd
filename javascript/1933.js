var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var [n1, n2] = lines.shift().split(" ").map(item => parseInt(item));

if(n1 >= n2) {
    console.log(n1);
} else {
    console.log(n2);
}