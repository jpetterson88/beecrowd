var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var n = Number(lines.shift());
var lista = lines.shift().split(" ").map(item => Number(item));
var m2 = 0, m3 = 0, m4 = 0, m5 = 0;

for(let i = 0; i < n; i++) {
    if(lista[i] % 2 === 0) m2 += 1;
    if(lista[i] % 3 === 0) m3 += 1;
    if(lista[i] % 4 === 0) m4 += 1;
    if(lista[i] % 5 === 0) m5 += 1;
}

console.log(`${m2} Multiplo(s) de 2`);
console.log(`${m3} Multiplo(s) de 3`);
console.log(`${m4} Multiplo(s) de 4`);
console.log(`${m5} Multiplo(s) de 5`);