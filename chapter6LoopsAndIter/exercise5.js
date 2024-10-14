// Refactor the code so that you don't need to call
// randomNumberBetween from two different locations, lines 6 and line 10.
// Do not change the arguments you pass to randomNumberBetween.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(
  "It took " + String(tries) + " tries to get a number greater than 2"
);

// The solution I used was to use a do/while loop instead of just a while loop, so the code would run first to
// initialize the result condition, instead of needing to initialize it ouside in order to have a value to evaluate.
// The only thing I didn't do was initialize the result with let, which I corrected after viewing the answer.
