let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);      //will iterate over all the object keys, including the prototype
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) { //will only iterate over my Obj own properties
  console.log(key);
}

for (let key in myObj) {              //will only iterate over my Obj own properties
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}