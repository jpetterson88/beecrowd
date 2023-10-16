var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var [a, b] = lines[0].split(" ").map(item => parseInt(item));
var q, resto;

q = parseInt(a / b);
resto = a % b;

if(q * b > a && b > 0) {
    q--;
    resto = a - (q * b);
} else if(q * b > a && b < 0) {
    q++;
    resto = a - (q * b);
}

console.log(`${q} ${resto}`);