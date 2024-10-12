// Identify all the variables named on each line of the following code.

function multiply(left, right) {
  //multiply, left, right
  let product = left * right; //product, left, right
  return product; //product
}

function getNumber(prompt) {
  //prompt, getNumber
  return parseFloat(question(prompt)); //parseFloat, question, prompt
}

let left = getNumber("Enter the first number: "); // left, getNumber
let right = getNumber("Enter the second number: "); // right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console, (WRONG) log, left, right, multiply

// Area where I screwed up: I thought console and the log were both variables, except
// console is the variable name for the built-in object, but console.log is the
// method within that object, and thus, log is a property name of the object variable,
// not a variable name itself.
