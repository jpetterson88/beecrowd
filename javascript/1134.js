var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var totA = 0;
var totG = 0;
var totD = 0;
var i;

for(i = 0; i < lines.length; i++) {
    if(lines[i] >= 1 && lines[i] <= 4) {
        if(lines[i] == 1) {
            totA += 1;
        } else if(lines[i] == 2) {
            totG += 1;
        } else if(lines[i] == 3) {
            totD += 1;
        } else if(lines[i] == 4) {
            break;
        }
    }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${totA}`);
console.log(`Gasolina: ${totG}`);
console.log(`Diesel: ${totD}`);