let readlineSync = require('readline-sync');
let name = readlineSync.question('What is your name? ');
let lastName = readlineSync.question('What is your last name? ');
console.log(`Hello, ${name} ${lastName}!`);