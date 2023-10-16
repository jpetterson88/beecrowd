var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var palavra1 = lines.shift();
var palavra2 = lines.shift();
var palavra3 = lines.shift();
var animal;

if(palavra1 == "vertebrado" && palavra2 == "ave"
&& palavra3 == "carnivoro") {
    animal = "aguia";
} else if(palavra1 == "vertebrado" && palavra2 == "ave"
&& palavra3 == "onivoro") {
    animal = "pomba";
} else if(palavra1 == "vertebrado" && palavra2 == "mamifero"
&& palavra3 == "onivoro") {
    animal = "homem";
} else if(palavra1 == "vertebrado" && palavra2 == "mamifero"
&& palavra3 == "herbivoro") {
    animal = "vaca";
} else if(palavra1 == "invertebrado" && palavra2 == "inseto"
&& palavra3 == "hematofago") {
    animal = "pulga";
} else if(palavra1 == "invertebrado" && palavra2 == "inseto"
&& palavra3 == "herbivoro") {
    animal = "lagarta";
} else if(palavra1 == "invertebrado" && palavra2 == "anelideo"
&& palavra3 == "hematofago") {
    animal = "sanguessuga";
} else if(palavra1 == "invertebrado" && palavra2 == "anelideo"
&& palavra3 == "onivoro") {
    animal = "minhoca";
}

console.log(animal);