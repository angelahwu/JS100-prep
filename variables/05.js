let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

//logs 'bar', reassigning to 'qux' is within the scope of the block