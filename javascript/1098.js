var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var i, j; 

i = 0;
j = 1;

while(i <= 2) {
    if(i.toFixed(1) == 0 || i.toFixed(1) == 1 || i.toFixed(1) == 2) {
        console.log(`I=${i.toFixed(0)} J=${(j + i).toFixed(0)}`);
        console.log(`I=${i.toFixed(0)} J=${(j + 1 + i).toFixed(0)}`);
        console.log(`I=${i.toFixed(0)} J=${(j + 2 + i).toFixed(0)}`);
    } else {
        console.log(`I=${i.toFixed(1)} J=${(j + i).toFixed(1)}`);
        console.log(`I=${i.toFixed(1)} J=${(j + 1 + i).toFixed(1)}`);
        console.log(`I=${i.toFixed(1)} J=${(j + 2 + i).toFixed(1)}`);
    }
    i += 0.2;
}