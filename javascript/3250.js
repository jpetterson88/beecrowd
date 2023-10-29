var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let [andares, inicio, meta, cima, baixo] = lines.shift().split(" ").map(Number);
let totCima = 0;
let totBaixo = 0;

if(andares == inicio && inicio == meta) {
    console.log(0);

} else if(cima === 0 && inicio < meta || baixo === 0 && inicio > meta || 
   cima > Math.abs(inicio - meta) && baixo > Math.abs(inicio - meta) || 
   cima % 2 === 0 && baixo % 2 === 0) {
    console.log("use the stairs");

} else {
    while(inicio < meta) {
        inicio += cima;
        totCima++;
        if(inicio > meta) {
            inicio -= baixo;
            totBaixo++;
        } else if(inicio == andares) {
            break;
        }
    }
    
    while(inicio > meta) {
        inicio -= baixo;
        totBaixo++;
        if(inicio < meta) {
            inicio += cima;
            totCima++;
        } else if(inicio == andares) {
            break;
        }
    }
    
    console.log(totBaixo + totCima);
}