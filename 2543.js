var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let i;
let totCS;

while(lines.length > 1) {
    let [totVideos, meuId] = lines.shift().split(" ").map(Number);
    totCS = 0;

    for(i = 0; i < totVideos; i++) {
        let [id, jogo] = lines.shift().split(" ").map(Number);
        if(jogo === 0 && id === meuId) totCS += 1;
    }
    console.log(totCS);
}