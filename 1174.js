var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => Number(item));

var i;

for(i = 0; i < 100; i++) {
    if(lines[i] <= 10) {
        console.log(`A[${i}] = ${lines[i].toFixed(1)}`);
    }
}