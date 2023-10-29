var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n = lines.shift();
var simbolo;
var sinalNegativo = false;

if(n[0][0] == '-') {
    sinalNegativo = true;
} 

n = parseFloat(n);
if(n >= 0 && sinalNegativo === false) {
    n = n.toExponential(4).split("e");
    if(n[1].length >= 3) {
        n = n.join("e");
        console.log('+' + n.toUpperCase());
    } else {
        simbolo = n[1][0];
        n[1] = simbolo + '0' + n[1][1];
        n = n.join("e");
        console.log('+' + n.toUpperCase());
    }
} else if(n <= 0 && sinalNegativo === true) {
    if(n == -0) {
        n = n.toExponential(4).split("e+");
        n[0] = '-' + n[0];
        n[1] = '0' + n[1];
        n = n.join("e+");
        console.log(n.toUpperCase());
    } else {
        n = n.toExponential(4).split("e");
        if(n[1].length >= 3) {
            n = n.join("e");
            console.log(n.toUpperCase());
        } else {
            simbolo = n[1][0];
            n[1] = simbolo + '0' + n[1][1];
            n = n.join("e");
            console.log(n.toUpperCase());
        }
    }
}