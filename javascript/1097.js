var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i, j; 

i = 1;
j = 7;

while(i <= 9) {
    console.log(`I=${i} J=${j}`);
    console.log(`I=${i} J=${j - 1}`);
    console.log(`I=${i} J=${j - 2}`);
    j += 2;
    i += 2;
}