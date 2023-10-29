var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var t = Number(lines.shift());
var i, j, n = [];

for(i = 0; i < 1000; i++) {
    for(j = 0; j < t; j++) {
        n.push(j)
    }
}

for(i = 0; i < 1000; i++) {
    console.log(`N[${i}] = ${n[i]}`);
}