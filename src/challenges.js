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
function footballPoints(wins, ties) {
  let mult = (wins) * 3;
  let soma = (mult + ties);
  return (soma);
}

// Desafio 6
function highestCount(xablau) {
  let max = Math.max(...xablau);
  let count = xablau.reduce(function (counter, value) {
    return counter + (value === max);
  }, 0);
  return (count);
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(xablau) {
  let resultado = [];
  for (let i = 0; i < xablau.length; i++) {

    if (xablau[i] % 5 === 0 && xablau[i] % 3 === 0) {
      resultado.push("fizzBuzz");
    } else if (xablau[i] % 5 === 0) {
      resultado.push("buzz");
    } else if (xablau[i] % 3 === 0) {
      resultado.push('fizz');
    } else resultado.push('bug!');
  }
  return resultado;
}
// Desafio 9
function encode(xablau) {
  
xablau = xablau.replace(/a/g, "1");
xablau = xablau.replace(/e/g, "2");
xablau = xablau.replace(/i/g, "3");
xablau = xablau.replace(/o/g, "4");
xablau = xablau.replace(/u/g, "5");
return xablau;
}

function decode(xablau) {
  xablau = xablau.replace(/1/g, "a");
  xablau = xablau.replace(/2/g, "e");
  xablau = xablau.replace(/3/g, "i");
  xablau = xablau.replace(/4/g, "o");
  xablau = xablau.replace(/5/g, "u");
  return xablau;
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
