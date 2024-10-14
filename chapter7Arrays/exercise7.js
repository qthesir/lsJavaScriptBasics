// Write a fucntion that returns the total sum of squares for a given array

let array = [3, 5, 7];

function sumOfSquares(arr) {
  sum = array.reduce(
    (accumulator, element) => accumulator + element * element,
    0
  );
  return sum;
}

console.log(sumOfSquares(array));

// I'm still a bit lost as to how this is actually implemented in the language. Like,
// what is happening under the hood with the accumulator function? Does it behave
// like an ordinary function?
