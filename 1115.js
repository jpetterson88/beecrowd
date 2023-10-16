var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i;

for(i = 0; i < lines.length; i++) {
    var [x, y] = lines[i].split(" ");
    if(x > 0 && y > 0) {
        console.log("primeiro");
    } else if(x < 0 && y > 0) {
        console.log("segundo");
    } else if(x > 0 && y < 0) {
        console.log("quarto");
    } else if(x < 0 && y < 0) {
        console.log("terceiro");
    }
}