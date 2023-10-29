var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var n1 = lines.shift();
var n2 = lines.shift();
var i;

if(n1 < n2) {
    for(i = n1 + 1; i < n2; i++) {
        if(i % 5 == 2 || i % 5 == 3) {
            console.log(i);
        }
    }
} else {
    for(i = n2 + 1; i < n1; i++) {
        if(i % 5 == 2 || i % 5 == 3) {
            console.log(i);
        }
    }
}