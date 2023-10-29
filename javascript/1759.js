var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n = lines.shift();
var i = 0;
var totHo = "";

for(i = 0; i < n; i++) {
    if(n - i == 1) {
        totHo += "Ho!";
    } else {
        totHo += "Ho" + " ";
    }
}

console.log(totHo);