var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totN = Number(lines.shift());
let raiz;

if(totN === 0) {
    raiz = 3;
} else if(totN === 1) {
    raiz = 3 + 1 / 6;
} else {
    raiz = 3 + 1 / denominador(totN);
}

console.log(raiz.toFixed(10));

function denominador(n) {
    if(n === 2) {
        return 6 + 1 / 6;
    } else {
        return 6 + 1 / denominador(n - 1);
    }
}