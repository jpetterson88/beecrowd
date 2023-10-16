var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let [tempo1, tempo2, tempo3] = lines.shift().split(" ").map(Number);

tempo1 + tempo2 === tempo3 || 
tempo1 + tempo3 === tempo2 || 
tempo2 + tempo3 === tempo1 || 
tempo1 === tempo2 || 
tempo1 === tempo3 || 
tempo2 === tempo3 ? console.log("S") : console.log("N");