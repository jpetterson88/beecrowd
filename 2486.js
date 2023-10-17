var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let indice = 0;
let totAlimentos, totQtde;

while(lines[indice] != '0') {
    totAlimentos = Number(lines.shift());
    totQtde = 0;
    for(let i = 0; i < totAlimentos; i++) {
        let [qtde, alimento] = lines.shift().split(" ");
        switch(alimento) {
            case "suco": 
                totQtde += qtde * 120; 
                break;
            case "morango":
            case "mamao": 
                totQtde += qtde * 85; 
                break;
            case "goiaba": 
                totQtde += qtde * 70; 
                break;
            case "manga": 
                totQtde += qtde * 56; 
                break;
            case "laranja":
                totQtde += qtde * 50;
                break;
            case "brocolis":
                totQtde += qtde * 34;
        }
    }
    if(totQtde < 110) {
        console.log(`Mais ${Math.abs(totQtde - 110)} mg`);
    } else if(totQtde > 130) {
        console.log(`Menos ${totQtde - 130} mg`);
    } else if(totQtde >= 110 && totQtde <= 130) {
        console.log(`${totQtde} mg`);
    } 
}