var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var i, n;

for(i = 0; i < lines.length - 1; i++) {
    n = lines[i];
    if (n > 0 && n <= 100) {
        console.log("vai ter duas!");
    } else if (n == 0) {
        console.log("vai ter copa!");
    }
}