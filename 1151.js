var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var t1 = 0, t2 = 1, t3;
var fibonacci = [t1, t2];

for(i = 2; i < n; i++) {
    t3 = t1 + t2;
    fibonacci.push(t3);
    t1 = t2;
    t2 = t3;
}

console.log(fibonacci.join(" "));