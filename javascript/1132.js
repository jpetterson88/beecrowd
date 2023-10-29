var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var n1 = lines.shift();
var n2 = lines.shift();
var i, totN = 0;

if(n1 < n2) {
    for(i = n1; i <= n2; i++) {
        if(i % 13 !== 0) {
            totN += i;
        }
    }
} else {
    for(i = n2; i <= n1; i++) {
        if(i % 13 !== 0) {
            totN += i;
        }
    }
}

console.log(totN);