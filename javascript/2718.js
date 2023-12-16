var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let n = Number(lines.shift());
let binario; 
let contador, maior;

for(let i = 0; i < n; i++) {
  binario = Number(lines[i]).toString(2);
  contador = 0;
  maior = 0;
  
  for(let j = 0; j < binario.length; j++) {
    if(binario[j] === '1') {
      contador++;
      if(contador > maior) {
        maior = contador;
      }
    } else {
      contador = 0;
    }
  }
  
  console.log(maior);
}