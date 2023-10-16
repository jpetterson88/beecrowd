var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const regex = /[0-9]+/g
string = 'a';

if(regex.test(string)) {
    console.log('sim');
} else {
    console.log('nao');
}