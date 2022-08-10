let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

//Line 3 counter = 1 inside the conditional part of the while loop. This is always truthy, so the condition is never false.
//At line 7 counter is always = to 2, so never breaks.