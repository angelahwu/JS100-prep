let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

let newPasscode = []
for (let i = 0; i < passcode.length; i++) {
  if (i < passcode.length - 1) {
    let password = passcode[i] + '-';
    newPasscode.push(password);
  } else {
    let lastPart = passcode[i];
    newPasscode.push(lastPart);
  }
}

console.log(newPasscode.join(''))

