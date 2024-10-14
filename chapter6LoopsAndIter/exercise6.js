// Reimplement the factorial function from
// exercise 2 using recursion. Once again, you may assume that the
// argument is always a positive integer.

function factorial(num) {
  if (num < 2) {
    return num;
  }
  return num * factorial(num - 1);
}

console.log(factorial(6));
