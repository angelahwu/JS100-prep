function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Sorry, this is not an integer.');
    return;
  }
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd')
  }
  }