var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\r\n");

let n = lines.shift();
let k = lines.shift();
let i, arr = [];

lines.sort((a, b) => b - a);

for(i = 0; i < k; i++) {
    arr[i] = lines.shift();
    n--;
}

for(i = 0; i < n; i++) {
    if(lines[i] == arr[arr.length - 1]) {
        arr.push(lines[i]);
    } else {
        break;
    }
}

console.log(arr.length);