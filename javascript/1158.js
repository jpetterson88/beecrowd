var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, j, totImpar;

for(i = 0; i < n; i++) {
    var [x, y] = lines[i].split(" ").map(item => parseInt(item));
    totImpar = 0;
    for(j = 0; j < y; j++) {
        if(x % 2 == 0) {
            x += 1;
        }
        totImpar += x;
        x = x + 2;
    }
    console.log(totImpar);
}