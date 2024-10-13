function even0r0dd(num) {
  if (typeof num !== "number" || parseInt(num) !== num) {
    console.log("Error: Function only accepts integers");
    return;
  }

  if (num % 2 > 0) {
    console.log("odd");
  } else {
    console.log("even");
  }
}

even0r0dd(6);

// The alternative way to do this, according to the solution, is to use the
// Number.isInteger() method on the number argument. Basically, if the number is
// an integer, this function will return back true, so you inverse the output with
// the ! operator such that any value returned false will cause the conditional statement
// to run and output the error and stop the function from running.
