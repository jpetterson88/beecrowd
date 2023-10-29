var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i;

for(i = 1; i <= n; i++) {
    if(n % i == 0) {
        console.log(i);
    }
}