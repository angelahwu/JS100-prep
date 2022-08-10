let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
console.log(objKeys)
let upperKeys = []
objKeys.forEach(function(key) {
  upperKeys.push(key.toUpperCase());
});