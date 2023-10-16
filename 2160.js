var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

var texto = lines.shift();
texto.length <= 80 ? console.log("YES") : console.log("NO");