function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let first = getNumber('Enter the first number: ');
let second = getNumber('Enter the second number: ');

function multiply(first, second) {
  return first * second;
}

console.log(`${first} * ${second} = ${multiply(first, second)}`);