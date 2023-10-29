var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var linha = lines[0].split(" ").map(item => Number(item));
var linha2 = lines[1].split(" ").map(item => Number(item));

var n1 = linha.shift();
var n2 = linha.shift();
var n3 = linha.shift();
var n4 = linha.shift();
var exame = linha2.shift(); 

var media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if(media >= 7.0) {
    console.log("Aluno aprovado.");
} else if(media < 5.0) {
    console.log("Aluno reprovado.");
} else if(media >= 5.0 && media <= 6.9) {
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    media = (media + exame) / 2;
    if(media >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${media.toFixed(1)}`);
}   