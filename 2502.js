var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let palavra1, palavra2, texto;
const REGEX = /[\d\W]/;

while(lines.length > 1) {
    let [totLetras, totFrases] = lines.shift().split(" ").map(Number);
    palavra1 = lines.shift().split("");
    palavra2 = lines.shift().split("");
    
    for(let z = 0; z < totFrases; z++) {
        texto = lines.shift().split("");
        
        for(let i = 0; i < texto.length; i++) {
            for(let j = 0; j < totLetras; j++) {
                if(texto[i].toLowerCase() == palavra1[j].toLowerCase()) {
                    REGEX.test(texto[i]) || texto[i] != palavra1[j] ?
                    texto[i] = palavra2[j].toLowerCase() : texto[i] = palavra2[j];
                
                } else if(texto[i].toLowerCase() == palavra2[j].toLowerCase()) {
                    REGEX.test(texto[i]) || texto[i] != palavra2[j] ?
                    texto[i] = palavra1[j].toLowerCase() : texto[i] = palavra1[j];
                }
            }
        }
        console.log(texto.join(""));
    }
    console.log("");
}