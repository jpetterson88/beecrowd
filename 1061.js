var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

var [inicio, diaInicio] = lines.shift().split(" ");
diaInicio = parseInt(diaInicio);

var [hInicio, mInicio, sInicio] = lines.shift().split(" : ").map(item => Number(item));

var [fim, diaFim] = lines.shift().split(" ");
diaFim = parseInt(diaFim);

var [hFim, mFim, sFim] = lines.shift().split(" : ").map(item => Number(item));

var totDias;
var totHora;
var totMinuto;
var totSegundo;

if(sInicio === sFim) {
    totSegundo = 0;
} else if(sInicio > sFim) {
    totSegundo = 60 - (sInicio - sFim);
} else if(sInicio < sFim) {
    totSegundo = sFim - sInicio;
}

if(mInicio === mFim && sInicio > sFim) {
    totMinuto = 60 - 1;
} else if(mInicio === mFim) {
    totMinuto = 0;
} else if(mInicio > mFim && sInicio > sFim) {
    totMinuto = 60 - (mInicio - mFim) - 1;
} else if(mInicio > mFim) {
    totMinuto = 60 - (mInicio - mFim);
} else if(mInicio < mFim) {
    totMinuto = mFim - mInicio
}

if(hInicio === hFim && mInicio >= mFim && sInicio > sFim) {
    totHora = 24 - 1;
} else if(hInicio === hFim) {
    totHora = 0;
} else if(hInicio > hFim && mInicio > mFim) {
    totHora = 24 - (hInicio - hFim) - 1;
} else if(hInicio > hFim) {
    totHora = 24 - (hInicio - hFim);
} else if(hInicio < hFim) {
    totHora = hFim - hInicio;
}

if((totHora === 0 || hFim > hInicio) && (totMinuto === 0 || mFim > mInicio) && (totSegundo === 0 || sFim > sInicio)) {
    totDias = diaFim - diaInicio;
} else {
    totDias = (diaFim - diaInicio) - 1;
}

console.log(`${totDias} dia(s)`);
console.log(`${totHora} hora(s)`); 
console.log(`${totMinuto} minuto(s)`);
console.log(`${totSegundo} segundo(s)`);