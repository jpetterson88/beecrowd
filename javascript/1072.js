var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item));

var n = lines.shift();
var dentro = 0; 
var fora = 0;
var i;

for(i = 0; i < n; i++) {
    if(lines[i] >= 10 && lines[i] <= 20) {
        dentro += 1;
    } else {
        fora += 1;
    }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);