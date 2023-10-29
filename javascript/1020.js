var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var idadeEmDias = lines.shift();

var anos = parseInt(idadeEmDias / 365);
var fracaoDeAnos = idadeEmDias % 365;

var meses = parseInt(fracaoDeAnos / 30);
var fracaoDeMeses = fracaoDeAnos % 30;

var dias = fracaoDeMeses * 1;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);