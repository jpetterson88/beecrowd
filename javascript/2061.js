var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var [abasInicial, totAcoes] = lines.shift().split(" ").map(item => parseInt(item));
var totAbas = abasInicial; 

for(var i = 0; i < totAcoes; i++) {
    let acao = lines[i];
    if(acao == "fechou") {
        totAbas += 1;
    } else {
        totAbas -= 1;
    }
}

console.log(totAbas);