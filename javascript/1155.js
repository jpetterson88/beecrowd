var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, s = 1;

for(i = 1; i < 100; i++) {
    s += (1 / (i + 1));
}

console.log(s.toFixed(2));