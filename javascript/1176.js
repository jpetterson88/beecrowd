var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var t = lines.shift();
var i, j, n, fib;

for(i = 0; i < t; i++) {
    n = lines[i];
    fib = [0, 1];
    for(j = 0; j < n; j++) {
        fib.push(fib[j] + fib[j + 1]);
    }
    console.log(`Fib(${n}) = ${fib[n]}`);
}