const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
//no error occurs because they are in different scopes/ blocks.