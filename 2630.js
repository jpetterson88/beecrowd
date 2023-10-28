var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let t = lines.shift();
let i, resultado, p = 0;

for(i = 0; i < t * 2; i += 2) {
    let conversao = lines[i];
    let [r, g, b] = lines[i + 1].split(" ").map(Number);
    
    switch(conversao) {
        case 'eye':
            resultado = (0.30 * r) + (0.59 * g) + (0.11 * b);
            break;
        case 'mean':
            resultado = (r + g + b) / 3;
            break;
        case 'max':
            resultado = Math.max(r, g, b);
            break;
        case 'min':
            resultado = Math.min(r, g, b);
    }
    p++;
    console.log(`Caso #${p}: ${Math.floor(resultado)}`);
}