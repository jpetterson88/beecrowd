var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var [horaSaida, tempoViagem, fusoHorario] = lines.shift().split(" ").map(item => parseInt(item));
var horaTotal;

if(horaSaida === 0) {
    horaSaida = 24;
}

horaTotal = horaSaida + tempoViagem + fusoHorario;

if(horaTotal > 24) {
    horaTotal = horaTotal - 24;
} else if(horaTotal === 24) {
    horaTotal = 0;
}

console.log(horaTotal);