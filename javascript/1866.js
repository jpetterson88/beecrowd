var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var c = lines.shift();
var i, j, t, total;

for(i = 0; i < c; i++) {
    t = lines[i];
    total = 1;
    for(j = 1; j < t; j++) {
        if(j % 2 !== 0) {
            total -= 1;
        } else {
            total += 1;
        }
    }
    console.log(total);
}