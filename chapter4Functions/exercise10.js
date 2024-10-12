// Using the code from exercise 9, classify each variable name as either global
// or local. For our purposes, you may assume that the below code constitutes the
// whole program.

function multiply(left, right) {
  //multiply(global), left(local), right(local)
  let product = left * right; //product(local), left(local), right(local)
  return product; //product (local)
}

function getNumber(prompt) {
  //prompt(local), getNumber(global)
  return parseFloat(question(prompt)); //parseFloat(global), question(global), prompt(local)
}

let left = getNumber("Enter the first number: "); // left(global), getNumber(global)
let right = getNumber("Enter the second number: "); // right(global), getNumber(global)
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console(global), left(global), right(global), multiply(global)
