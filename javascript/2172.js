var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let totExp;

for(let i = 0; i < lines.length; i++) {
    let [level, exp] = lines[i].split(" ").map(Number);
    
    if(level === 0 && exp === 0) {
        break;
    } else {
        totExp = exp * level;
        console.log(totExp);
    }
}