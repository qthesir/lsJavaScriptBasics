// As written, this code will raise an error on line 6. Update the code to work
// as intended, without creating a new function or changing lines 5 or 6.

foo = function foo(bar) {
  console.log(bar, bar, bar);
};

let bar = foo;

foo("hello");
bar("hi");

// This solution allows the keywords foo and bar to point to the same function in
// memory, and the code will run without errors. This solution does not change
// lines 5 and 6 and does not change the function, as the question requests.
