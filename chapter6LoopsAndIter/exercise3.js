// The following code causes an infinite
// loop. Why?

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Because the conditional is assigning the counter variable to 1, which is returning the number 1, which javascript
// evaluates as a truthy value, thus ensuring the conditions remains true indefinitely. Further, the "break" statement
// on line 11 is never executed, because, due to the assignment of the variable to 1, the counter increments to 2 on
// each loop, which is equal to 2 but not greater than 2.
