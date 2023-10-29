var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var i;

for(i = 0; i < lines.length; i++) {
    if(lines[i] <= 0) {
        lines[i] = 1;
    }
    console.log(`X[${i}] = ${lines[i]}`);
}