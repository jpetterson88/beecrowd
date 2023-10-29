var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var i, j, n, totPar;

for(i = 0; i < lines.length; i++) {
    n = parseInt(lines[i]);
    if(n === 0) {
        break;
    }
    totPar = 0;
    for(j = 0; j < 5; j++) {
        if(n % 2 !== 0) {
            n += 1;
        }
        totPar += n;
        n = n + 2;
    }
    console.log(totPar);
}