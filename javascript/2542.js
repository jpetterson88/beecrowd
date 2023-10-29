var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let qtdeAtributos;
let i;
let matrizM = [];
let matrizL = [];
let atributo;

while(lines.length > 1) {
    qtdeAtributos = Number(lines.shift());
    let [totCartasM, totCartasL] = lines.shift().split(" ").map(Number);
    
    for(i = 0; i < totCartasM; i++) {
        matrizM[i] = lines.shift().split(" ").map(Number);
    }

    for(i = 0; i < totCartasL; i++) {
        matrizL[i] = lines.shift().split(" ").map(Number);
    }

    let [escolhidaM, escolhidaL] = lines.shift().split(" ").map(Number);
    atributo = Number(lines.shift());
    
    if(matrizM[escolhidaM - 1][atributo - 1] > 
       matrizL[escolhidaL - 1][atributo - 1]) {
        console.log("Marcos");
    
    } else if(matrizM[escolhidaM - 1][atributo - 1] < 
              matrizL[escolhidaL - 1][atributo - 1]) {
        console.log("Leonardo");
    
    } else {
        console.log("Empate");
    }
}