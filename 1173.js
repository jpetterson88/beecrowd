var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var i;

for(i = 0; i <= 9; i++) {
    lines[i + 1] = lines[i] * 2; 
    console.log(`N[${i}] = ${lines[i]}`); 
}