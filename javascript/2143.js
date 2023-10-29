var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n").map(item => parseInt(item));

var i = 0;
var total;

while(lines[i] !== 0) {
    let t = lines[i];
    i++;
    for(let j = 0; j < t; j++) {
        if(lines[i] % 2 === 0) {
            total = (lines[i] * 2) - 2;
        } else {
            total = (lines[i] * 2) - 1;
        }
        console.log(total);
        i++;
    }
}