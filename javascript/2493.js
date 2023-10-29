var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totJog, expressoes, eliminados;
let n1, n2, n3;
let resposta = false;
let soma, sub, mul;

while(lines.length > 1) {
    totJog = Number(lines.shift());
    expressoes = [];
    eliminados = [];
    for(let i = 0; i < totJog; i++) {
        expressoes[i] = lines.shift();
        expressoes[i] = extrairDados(expressoes[i]);
    }
    for(let j = 0; j < totJog; j++) {
        let [nome, posicao, operador] = lines.shift().split(" ");
        n1 = expressoes[posicao - 1][0];
        n2 = expressoes[posicao - 1][1];
        n3 = expressoes[posicao - 1][2];
        soma = Number(n1) + Number(n2);
        sub = n1 - n2;
        mul = n1 * n2;
        if(soma == n3) resposta = true;
        if(sub == n3) resposta = true;
        if(mul == n3) resposta = true;
        if(operador == "I" && resposta == true) {
            eliminados.push(nome);
        } else if(operador == "+" && soma != n3) {
            eliminados.push(nome);
        } else if(operador == "-" && sub != n3) {
            eliminados.push(nome);
        } else if(operador == "*" && mul != n3) {
            eliminados.push(nome);
        }
        resposta = false;
    }
    if(eliminados.length == 0) {
        console.log("You Shall All Pass!");
    } else if(eliminados.length == totJog) {
        console.log("None Shall Pass!");
    } else {
        console.log(eliminados.sort().join(" "));
    }
}

function extrairDados(array) {
    let arr, novoArray = [];
    
    arr = array.split(" ");
    arr[1] = arr[1].split("=");

    novoArray[0] = arr[0];
    novoArray[1] = arr[1][0];
    novoArray[2] = arr[1][1];

    return novoArray;
}