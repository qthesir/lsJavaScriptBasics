// What does this program log in the console? Why?

let foo = "bar";

{
  let foo = "qux";
}

console.log(foo);

// It's going to log 'qux' because the variable was declared in the global scope.
// Although, this does beg the question as to what the difference is between second
// declaration vs. reassignment. How is that treated?

// Appears that I was wrong. It logged bar, rather than "qux". However, if I remove the let
// declaration, then I get qux. So the let must declare a new variable in scope, although
// it can also access the other foo out of scope... So this is confusing.
// According to the answer, the reason this happens is because, when you declare a variable
// of the same name in a new lower-level block scope, JavaScript ignores the variable of that
// name in the global scope for the duration of the block scope.
