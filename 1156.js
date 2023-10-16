var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, j, s = 1;

for(i = 1, j = 2; i < 39; i += 2, j *= 2) {
    s += ((i + 2) / j);
}

console.log(s.toFixed(2));