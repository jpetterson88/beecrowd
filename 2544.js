var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totCopias;

while(lines.length > 1) {
    totCopias = Number(lines.shift());
    console.log(divisao(totCopias));
}

function divisao(n) {
    if(n === 1) {
        return 0;
    } else {
       return 1 + divisao(parseInt(n / 2));
    }
}