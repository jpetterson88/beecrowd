var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var vetor = lines.shift().split("");

if(vetor.length == 2) {
    vetor[2] = vetor[1];
    vetor[1] = vetor[0];
    vetor[0] = '0'; 
} else if(vetor.length == 1) {
    vetor[2] = vetor[0];
    vetor[1] = '0';
    vetor[0] = '0'; 
}

var i;
var unidades = '';
var dezenas = '';
var centenas = '';

for(i = 1; i <= Number(vetor[2]); i++) {
    if(i >= 1 && i < 4) {
        unidades += 'I';
    }
    if(i == 4) {
        unidades = '';
        unidades += 'IV';
    }
    if(i == 5) {
        unidades = '';
        unidades += 'V';
    }
    if(i > 5 && i < 9) {
        unidades += 'I';
    }
    if(i == 9) {
        unidades = '';
        unidades += 'IX';
    }
}

for(i = 1; i <= Number(vetor[1]); i++) {
    if(i >= 1 && i < 4) {
        dezenas += 'X';
    }
    if(i == 4) {
        dezenas = '';
        dezenas += 'XL';
    }
    if(i == 5) {
        dezenas = '';
        dezenas += 'L';
    }
    if(i > 5 && i < 9) {
        dezenas += 'X';
    }
    if(i == 9) {
        dezenas = '';
        dezenas += 'XC';
    }
}

for(i = 1; i <= Number(vetor[0]); i++) {
    if(i >= 1 && i < 4) {
        centenas += 'C';
    }
    if(i == 4) {
        centenas = '';
        centenas += 'CD';
    }
    if(i == 5) {
        centenas = '';
        centenas += 'D';
    }
    if(i > 5 && i < 9) {
        centenas += 'C';
    }
    if(i == 9) {
        centenas = '';
        centenas += 'CM';
    }
}

console.log(centenas + dezenas + unidades);