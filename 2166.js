var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totN = Number(lines.shift());
let raiz;

if(totN === 0) {
    raiz = 1;
} else if(totN === 1) {
    raiz = 1 + 1 / 2;
} else {
    raiz = 1 + 1 / denominador(totN);
}

console.log(raiz.toFixed(10));

function denominador(n) {
    if(n === 2) {
        return 2 + 1 / 2;
    } else {
        return 2 + 1 / denominador(n - 1);
    }
}