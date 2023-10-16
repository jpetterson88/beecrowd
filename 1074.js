var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var n = lines.shift();

for(var i = 0; i < n; i++) {
    if(lines[i] % 2 === 0 && lines[i] > 0) {
        console.log("EVEN POSITIVE");
    } else if(lines[i] % 2 === 0 && lines[i] < 0) {
        console.log("EVEN NEGATIVE");
    } else if(lines[i] % 2 !== 0 && lines[i] > 0) {
        console.log("ODD POSITIVE");
    } else if(lines[i] % 2 !== 0 && lines[i] < 0) {
        console.log("ODD NEGATIVE");
    } else if(lines[i] === 0) {
        console.log("NULL");
    }
}
