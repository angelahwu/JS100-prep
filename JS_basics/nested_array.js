let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

console.log(vocabulary[0][1]);

for (let i = 0; i < vocabulary.length; i++) {
  for (let j = 0; j < vocabulary[i].length; j++) {
    console.log(vocabulary[i][j]);
  }
}