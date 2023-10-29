var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i, j; 

i = 1;
j = 60;

while(j >= 0) {
    console.log(`I=${i} J=${j}`);
    i += 3;
    j -= 5;
}