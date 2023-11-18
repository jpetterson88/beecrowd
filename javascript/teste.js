var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const numeroDeTeste = lines.length;

let inicio = 0;
let test = 0;

for(test = 1; test <= numeroDeTeste; test++) {
    const N = parseInt(lines[inicio]);
    inicio++;

    for(let i = 1; i <= N; i++) {
        if(N - i == 0) {
            process.stdout.write(i.toString());
        } else {
            process.stdout.write(i.toString() + ' ');
        }
    }
    process.stdout.write('\n');
}