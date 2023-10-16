var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i, j; 

i = 1;
j = 7;

while(i <= 9) {
    console.log(`I=${i} J=${j}`);
    j--;
    if(j == 4) {
        i += 2;
        j = 7;
    }
}