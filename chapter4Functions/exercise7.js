// Without running the code, what do you think will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo("Hello");

// The code will print 'Hello' on the first line and undefined on the second line.
// The reason for this is because, if only one argument is passed, JavaScript will
// add that argument to the first varialbe, and label the other one as undefined.
// If nothing were passed into foo, i.e. foo(), then both values would be assigned
// undefined by JavaScript
