// As written, this code will raise an error on line 5. Without modifying foo,
// update this code to print the desired text.

function foo(bar) {
  console.log(bar());
}
increment = 0;
function bar(text = ["Welcome", 3.1415, [1, 2, 3]]) {
  increment += 1;
  return text[increment - 1];
}

foo(bar);
foo(bar);
foo(bar);

// The book solution passed three anonymous functions into each foo call, each
// returning different values. In my case, I assigned an array to the base variable,
// and incremented each time the function was called. Kind of a make-shift generator
// function. So, different solutions, but same outcome.
