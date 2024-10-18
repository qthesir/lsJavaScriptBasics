// What does the following program log to the console? Why?

let foo = {
  a: "hello",
  b: "world",
};
let qux = "hello";

function bar(argument1, argument2) {
  argument1.a = "hi";
  argument2 = "hi";
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// My guess is that they log 'hi' and 'hi' to the console. The function is bringing
// in foo and qux from the global scope into the function scope and reassigning
// them both. I would guess that would persist in the global scope, given there is
// no shadowing via the let declaration.

// This was incorrect. qux logs 'hello,' not hi. The reason for this is that I failed
// to consider the differences between mutating an object vs. reassigning a variable
// within a function. With the reassignment, this causes the argument variable to
// point to a new location in memory with the new value, leaving the global variable
// unaffected. But with a mutation, the local variable is referring to the same location
// in memory as the global variable passed into the function, and that location in memory
// gets mutated, thus changing the global variable.

// I would actually argue
