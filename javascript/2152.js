var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var c = Number(lines.shift());

for(let i = 0; i < c; i++) {
    let [hora, minuto, ocorrencia] = lines[i].split(" ");
    
    ocorrencia == 1 ? ocorrencia = "abriu" : ocorrencia = "fechou";
    
    if(hora < 10) hora = "0" + hora;
    if(minuto < 10) minuto = "0" + minuto;
    
    console.log(`${hora}:${minuto} - A porta ${ocorrencia}!`);
}