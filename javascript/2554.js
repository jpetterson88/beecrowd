var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let data, dataEscolhida, dados; 
let total, maior;
let i, j;

while(lines.length > 1) {
    let [totPessoas, totDatas] = lines.shift().split(" ").map(Number);
    maior = 0;
    
    for(i = 0; i < totDatas; i++) {
        dados = lines.shift().split(" ");
        data = dados.shift();
        total = 0;
        
        for(j = 0; j < totPessoas; j++) {
            total += Number(dados[j]);
        }
        
        if(total > maior) {
            maior = total;
            dataEscolhida = data;
        }
    }
    maior === totPessoas ? console.log(dataEscolhida) : 
    console.log("Pizza antes de FdI"); 
}