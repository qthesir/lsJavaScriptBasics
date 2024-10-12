// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// Well, I admittingly cannot completely remember how JavaScript handles passing in
// an additional variable, but I do know that it handles it. My best guess, is that
// the variable farthest to the right is ignored, and the two righthand variables
// are the ones that are used for the function call. That is, 42 and 3.1415 are
// going to be logged to the console.

// I was correct. The third argument is ignored, because only 2 parameters are
// mentioned.
