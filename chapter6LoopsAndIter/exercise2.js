// Create a for loop that returns a factorial

function factorial(num) {
  let total = num;
  for (let i = num - 1; i > 0; i--) {
    total = total * i;
    console.log(total, i);
  }
  return total;
}

console.log(factorial(5));

// I could have, alternatively, set the total to 1 instead of num, and had total multiplied by itself on each iteration
// and not subtracted 1 from the number.
