function first(array) {
  return array[0];
}

function last(array) {
  return array[array.length -1]
}

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift();
energy.push('geothermal');

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let alphaArray = alphabet.split('');

