var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i;

for(i = 0; i < lines.length; i++) {
    var [x, y] = lines[i].split(" ").map(item => parseInt(item));
    if(x > y) {
        console.log("Decrescente");
    } else if(x < y) {
        console.log("Crescente");
    }
}