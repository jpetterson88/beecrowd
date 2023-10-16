var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var x = parseFloat(lines.shift());
var i, n = [x];

for(i = 1; i < 100; i ++) {
    n[i] = n[i - 1] / 2.0;
}

for(i = 0; i < 100; i++) {
    console.log(`N[${i}] = ${n[i].toFixed(4)}`);
}