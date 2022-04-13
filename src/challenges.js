// Desafio 1
function compareTrue(ensol, fds) {
  if (ensol === true && fds === true) {
    return true;
  }
  if (ensol === false && fds === false) {
    return false;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let resultado = {};

  resultado = (base * altura) / 2;

  return resultado;
}


// Desafio 3
function splitSentence(xablau) {
  let xablauArray = {};
  xablauArray = xablau.split(" ");
  return xablauArray;
}

// Desafio 4
function concatName(xablau) {
  let first = xablau[0];
  let last = xablau[xablau.length - 1];
  return (last + ', ' + first);
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
