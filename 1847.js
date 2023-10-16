var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var [a, b, c] = lines[0].split(" ").map(item => parseInt(item));

if(b < a && c >= b) {
    console.log(":)");
} else if(b > a && c <= b) {
    console.log(":(");
} else if(b > a && c > b && c - b < b - a) {
    console.log(":(");
} else if(b > a && c > b && c - b >= b - a) {
    console.log(":)");
} else if(b < a && c < b && b - c < a - b) {
    console.log(":)");
} else if(b < a && c < b && b - c >= a - b) {
    console.log(":(");
} else if(b == a && c > b) {
    console.log(":)");
} else {
    console.log(":(");
}