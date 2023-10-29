var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, x = 1;

for(i = 0; i < n; i++) {
    console.log(`${x} ${Math.pow(x, 2)} ${Math.pow(x, 3)}`);
    ++x;
}