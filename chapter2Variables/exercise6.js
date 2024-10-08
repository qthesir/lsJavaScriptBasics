// Will this program produce an error when run? Why or why not?

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

// I'm going to say this program will not produce an error, for the same reason as the previous
// question: Because when FOO is declared in the block scope, the program ignores the FOO
// in global scope until the block scope completes. So, its not going to throw an error,
// and 'bar' will be logged to the console.
