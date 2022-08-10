let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//What does this code log to the console? Why?

//logs [1, 4, 3]
// JS uses pointers for non-primitive values.