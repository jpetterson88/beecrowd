var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var i, totM;

for(i = 0; i < lines.length; i++) {
    if(lines[i] == 0) {
        break;
    } else {
        var [a, b, c] = lines[i].split(" ");
        totM = (a * b * 100) / c;
        console.log(Math.floor(Math.sqrt(totM)));
    }
}