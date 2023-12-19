var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let total = 0;
let contador;

lines.forEach(valor => total += Number(valor));

contador = total / 9;

for(let i = 0; i < contador - 1; i++) {
  total -= 9;
}

switch(total) {
  case 1: console.log("Dasher"); break;
  case 2: console.log("Dancer"); break;
  case 3: console.log("Prancer"); break;
  case 4: console.log("Vixen"); break;
  case 5: console.log("Comet"); break;
  case 6: console.log("Cupid"); break;
  case 7: console.log("Donner"); break;
  case 8: console.log("Blitzen"); break;
  case 9: console.log("Rudolph"); break;
}