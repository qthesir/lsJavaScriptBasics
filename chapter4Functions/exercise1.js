// What does this code log to the console? Does executing the foo function affect
// the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// This program will print 1 to the console, and executing foo does not affect the
// output. The reason is because, as opposed to reassigning bar in the function
// foo(), a new varialbe bar is declared, which causes it to ignore the bar in
// the global scope.
