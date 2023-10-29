var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(item => parseInt(item));

lines.sort((a, b) => { 
    return a - b; 
});

if(lines[0] + lines[1] > lines[2] || lines[0] + lines[1] > lines[3] || 
lines[0] + lines[2] > lines[3] || lines[1] + lines[2] > lines[3]) {
    console.log('S');
} else {
    console.log('N');
}

