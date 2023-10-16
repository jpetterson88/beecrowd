var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift();

for(i = 0; i < n; i++) { 
    var [a, b, c] = lines[i].split(" ");
    var media = (a * 2 + b * 3 + c * 5) / 10;
    console.log(media.toFixed(1));
}

