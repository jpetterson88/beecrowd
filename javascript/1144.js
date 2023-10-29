var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i; 
var x = 1; 
var y;
var z;

for(i = 0; i < n; i++) {
    y = x * x;
    z = x * y;
    console.log(`${x} ${y} ${z}`);
    console.log(`${x} ${y + 1} ${z + 1}`);
    ++x;
}