var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(item => parseInt(item));

var i;
var par = [];
var impar = [];
var j, z;

for(i = 0; i < 15; i++) {
    if(lines[i] % 2 === 0) {
        par.push(lines[i]);
        if(par.length === 5) {
            for(j = 0; j < 5; j++) {
                console.log(`par[${j}] = ${par[j]}`);
            }
            par = [];
        }
    } else {
        impar.push(lines[i]);
        if(impar.length === 5) {
            for(z = 0; z < 5; z++) {
                console.log(`impar[${z}] = ${impar[z]}`);
            }
            impar = [];
        }
    }
}

for(i = 0; i < impar.length; i++) {
    console.log(`impar[${i}] = ${impar[i]}`);
}

for(i = 0; i < par.length; i++) {
    console.log(`par[${i}] = ${par[i]}`);
}