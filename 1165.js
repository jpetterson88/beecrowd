var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();
var i, j, x, totDivisores;

for(i = 0; i < n; i++) {
    x = lines[i];
    totDivisores = 0;
    for(j = 1; j <= x; j++) {
        if(x % j === 0) {
            totDivisores += 1;
        }
    }
    if(totDivisores === 2) {
        console.log(`${x} eh primo`);
    } else {
        console.log(`${x} nao eh primo`);
    }
}