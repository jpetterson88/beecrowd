var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let string;
let arr = [];

while(lines.length > 1) {
    string = lines.shift();
    if(!arr.includes(string)) {
        arr.push(string);
    } 
}

console.log(arr.length);