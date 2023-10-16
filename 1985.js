var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var total = lines.shift();
var i, valor = 0;

for(i = 0; i < total; i++) {
    var [codigo, qtde] = lines[i].split(" ");
    switch(codigo) {
        case '1001':
            valor += 1.50 * qtde; 
            break;
        case '1002':
            valor += 2.50 * qtde; 
            break;
        case '1003':
            valor += 3.50 * qtde; 
            break;
        case '1004': 
            valor += 4.50 * qtde; 
            break;
        case '1005':
            valor += 5.50 * qtde;
    }
}

console.log(valor.toFixed(2));