var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

while(lines.length > 1) {
    let [dodo, leo, pepper] = lines.shift().split(" ");

    if(dodo == "pedra" && leo == "tesoura" && pepper == "tesoura" ||
       dodo == "papel" && leo == "pedra" && pepper == "pedra" ||
       dodo == "tesoura" && leo == "papel" && pepper == "papel") {
        console.log("Os atributos dos monstros vao ser inteligencia, sabedoria...");
    
    } else if(leo == "pedra" && dodo == "tesoura" && pepper == "tesoura" ||
              leo == "papel" && dodo == "pedra" && pepper == "pedra" ||
              leo == "tesoura" && dodo == "papel" && pepper == "papel") {
        console.log("Iron Maiden's gonna get you, no matter how far!");        
    
    } else if(pepper == "pedra" && dodo == "tesoura" && leo == "tesoura" ||
              pepper == "papel" && dodo == "pedra" && leo == "pedra" ||
              pepper == "tesoura" && dodo == "papel" && leo == "papel") {
        console.log("Urano perdeu algo muito precioso...");        
    
    } else {
        console.log("Putz vei, o Leo ta demorando muito pra jogar...");
    }
}