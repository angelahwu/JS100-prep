let string = 'launch school tech & talk'

function toCapString(string) {
  let splitToWords = string.split(' ');
  let capWords = [];

  for (let i = 0; i < splitToWords.length; i += 1) {
    capWords.push(splitToWords[i][0].toUpperCase() + splitToWords[i].slice(1));
  }
  return capWords.join(' ');
}

console.log(toCapString(string));
