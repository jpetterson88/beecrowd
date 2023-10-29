var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => Number(item));

var tempoGasto = lines.shift();
var velocidadeMedia = lines.shift();

var distancia = tempoGasto * velocidadeMedia;
var litros = distancia / 12;

console.log(litros.toFixed(3));