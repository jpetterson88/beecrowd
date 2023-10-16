var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var t = lines.shift();
var i;

for(i = 0; i < t; i++) {
    var [sheldon, raj] = lines[i].split(" ");
    if(sheldon == "tesoura" && raj == "papel") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "papel" && raj == "pedra") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "pedra" && raj == "lagarto") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "lagarto" && raj == "Spock") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "Spock" && raj == "tesoura") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "tesoura" && raj == "lagarto") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "lagarto" && raj == "papel") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "papel" && raj == "Spock") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "Spock" && raj == "pedra") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == "pedra" && raj == "tesoura") {
        console.log(`Caso #${i + 1}: Bazinga!`);
    } else if(sheldon == raj) {
        console.log(`Caso #${i + 1}: De novo!`);
    } else {
        console.log(`Caso #${i + 1}: Raj trapaceou!`);
    }
}