var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let entrada = lines.shift();

if(entrada.length <= 140) {
    console.log("TWEET");
} else {
    console.log("MUTE");
}