var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i;

for(i = 0; i < n; i++) {
    var [x, y] = lines[i].split(" ");
    if(y == 0) {
        console.log("divisao impossivel");
    } else {
        console.log((x / y).toFixed(1));
    }
}