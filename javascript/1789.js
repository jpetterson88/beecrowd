var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var t, i;
var maior, nivel;

while(lines.length > 1) {
    t = lines.shift();
    vetor = lines.shift().split(" ").map(item => parseInt(item));
    maior = 0;
    for(i = 0; i < t; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i];
            if(maior < 10) {
                nivel = 1;
            } else if(maior < 20) {
                nivel = 2;
            } else {
                nivel = 3;
            }
        }
    }
    console.log(nivel);
}