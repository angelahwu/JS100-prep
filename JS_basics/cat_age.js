function catAge(num) {
  if (num === 0) {
    return 0;
    } else if (num === 1) {
      return 15;
    } else if (num === 2) {
      return 24;
    } else {
      return ((num - 2) * 4) + 24;
    }
  }

console.log(catAge(0)); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
console.log(catAge(4)); // 32