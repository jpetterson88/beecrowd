var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var [totSalto, totCanos] = lines[0].split(" ").map(item => Number(item));
var alturaDosCanos = lines[1].split(" ").map(item => Number(item));
var contador = 0;

for(var i = 0; i < totCanos - 1; i++) {
    if(totSalto >= Math.abs(alturaDosCanos[i] - alturaDosCanos[i + 1])) {
        contador += 1;
    } 
}

if(contador == totCanos - 1) {
    console.log("YOU WIN");
} else {
    console.log("GAME OVER");
}