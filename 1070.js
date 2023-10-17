var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());

for(var i = x; i < (x + 12); i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}