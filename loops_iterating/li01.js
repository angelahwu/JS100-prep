let readlineSync = require('readline-sync');
let currentAge = readlineSync.question('How old are you? ');
currentAge = Number(currentAge)
console.log(`You are ${currentAge} years old.`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${currentAge + future} years old`);
}