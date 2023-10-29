var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var n = lines.shift();

for(var i = 1; i < 10000; i++) {
    if(i % n === 2) {
        console.log(i);
    }
}