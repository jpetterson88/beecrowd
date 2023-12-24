var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n = lines.shift();
let texto;
let novoTexto;
let valor;
let metadeDoTexto;

for (let i = 0; i < n; i++) {
  texto = lines[i];
  novoTexto = "";
  
  for (j = 0; j < texto.length; j++) {
    if (minuscula(texto[j]) || maiuscula(texto[j])) {
        valor = texto[j].charCodeAt();
        novoTexto += String.fromCharCode(valor + 3);
    } else {
      novoTexto += texto[j];
    }
  }

  texto = "";
  metadeDoTexto = Math.ceil(novoTexto.length / 2) - 1;

  for (let z = novoTexto.length - 1; z >= 0; z--) {
    if (z <= metadeDoTexto) {
      valor = novoTexto[z].charCodeAt();
      texto += String.fromCharCode(valor - 1);
    } else {
      texto += novoTexto[z];
    }
  }
  console.log(texto);
}

function minuscula(texto) {  
  if (texto.charCodeAt() >= 65 && texto.charCodeAt() <= 90) {
    return texto;
  }
}

function maiuscula(texto) {  
  if (texto.charCodeAt() >= 97 && texto.charCodeAt() <= 122) {
    return texto;
  }
}