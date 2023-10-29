var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var tot = lines.shift();
const ANO = 2015;

for(var i = 0; i < tot; i++) {
    let ano = Math.abs(ANO - lines[i]);
    if(ANO > lines[i]) {
        console.log(`${ano} D.C.`);
    } else {
        console.log(`${ano + 1} A.C.`);
    }
}