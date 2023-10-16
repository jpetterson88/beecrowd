var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n = lines.shift();
var impar;
var i, j;

for(i = 0; i < n; i++) {
    var [x, y] = lines[i].split(" ").map(item => parseInt(item));
    if(x < y) {
        impar = 0;
        for(j = x + 1; j < y; j++) {
            if(j % 2 !== 0) {
                impar += j;
            }
        }
    } else if(x > y) {
        impar = 0;
        for(j = x - 1; j > y; j--) {
            if(j % 2 !== 0) {
                impar += j
            }
        }
    } else {
        impar = 0;
    }
    console.log(impar);
}