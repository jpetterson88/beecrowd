var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

for(let i = 0; i < lines.length - 1; i++) {
    let senha = Number(lines[i] - 1);
    console.log(senha);
}