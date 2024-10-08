// What happens when you run the program? Why do we get that result?

{
  let foo = "bar";
}

console.log(foo);

// The result is a reference error: foo is not defined. This is because let declarations
// are block scoped, and where foo is declared is in a block, while console.log is
// called in the global scope. I.e., foo is out of scope.
