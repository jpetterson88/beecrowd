var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n = lines.shift();

let bonecos = 0;
let arquitetos = 0;
let musicos = 0;
let desenhistas = 0;

for(let i = 0; i < n; i++) {
    let [nome, grupo, horas] = lines[i].split(" ");
    horas = Number(horas);

    switch(grupo) {
        case 'bonecos': 
            bonecos += horas; 
            break;
        case 'arquitetos': 
            arquitetos += horas; 
            break;
        case 'musicos': 
            musicos += horas; 
            break;
        case 'desenhistas':
            desenhistas += horas;
    }
}

bonecos = parseInt(bonecos / 8);
arquitetos = parseInt(arquitetos / 4);
musicos = parseInt(musicos / 6);
desenhistas = parseInt(desenhistas / 12);

console.log(bonecos + arquitetos + musicos + desenhistas);