var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n").map(Number);

let andar1 = lines.shift();
let andar2 = lines.shift();
let andar3 = lines.shift();
let tot1, tot2, tot3;

tot1 = andar2 * 2 + andar3 * 4;
tot2 = andar1 * 2 + andar3 * 2;
tot3 = andar1 * 4 + andar2 * 2;

console.log(Math.min(tot1, tot2, tot3));