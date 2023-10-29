var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item));

var x = lines.shift();
var y = lines.shift();
var totImpar = 0;

if(x < y) {
    for(var i = x + 1; i < y; i++) {
        if(i % 2 !== 0) {
            totImpar += i;
        }
    }
} else {
    for(var i = x - 1; i > y; i--) {
        if(i % 2 !== 0) {
            totImpar += i;
        }
    }
}

console.log(totImpar);

