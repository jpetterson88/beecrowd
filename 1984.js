var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var n = lines.shift().split("").map(item => parseInt(item));
var final = n.length;

for(var i = 0; i < Math.floor(n.length / 2); i++) {
    aux = n[i];
    n[i] = n[final - 1];
    n[final - 1] = aux;
    final--;
}

if(isNaN(n[0])) {
    n.shift();
}

console.log(n.join(""));