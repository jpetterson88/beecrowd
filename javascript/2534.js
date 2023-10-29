var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let arr = [];
let pos;
let i, j, aux;

while(lines.length > 1) {
    let [totHab, posicao] = lines.shift().split(" ").map(Number);

    for(i = 0; i < totHab; i++) {
        arr[i] = Number(lines.shift());
    }

    for(i = 0; i < totHab - 1; i++) {
        for(j = i + 1; j < totHab; j++) {
            if(arr[i] < arr[j]) {
                aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }

    for(i = 0; i < posicao; i++) {
        pos = Number(lines.shift());
        console.log(arr[pos - 1]);
    }
}