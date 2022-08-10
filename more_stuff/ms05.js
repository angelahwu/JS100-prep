function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//string is converted to array, split at the space separator
//array is reversed
//map creates a new array which outputs the length of the words