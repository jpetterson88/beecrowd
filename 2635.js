var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n, q;
let i, j; 
let palavra, palavras = [];
let total, maior;

while(lines.length > 1) {
    n = lines.shift();
    
    for(i = 0; i < n; i++) {
        palavras[i] = lines.shift();
    }
    
    q = lines.shift();
    
    for(i = 0; i < q; i++) {
        palavra = lines.shift();
        total = 0;
        maior = 0;
        
        for(j = 0; j < n; j++) {
            if(palavras[j].startsWith(palavra)) {
                total++;
                if(palavras[j].length > maior) {
                    maior = palavras[j].length;
                }
            }
        }
        
        if(total === 0) {
            console.log(-1);
        } else {
            console.log(`${total} ${maior}`);
        }
    }
}