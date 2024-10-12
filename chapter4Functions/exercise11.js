// Using the code from exercise 9, are left and right variables on lines 3 and 5
// the same as left and right variables on line 15-17? explain your reasoning.

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

// No, they are not the same varialbes. The left and right variables on lines 3 and
// 5 are parameters and local varialbes in the multiply function scope. The variables
// on line 15-17, in contrast, are global variables used to store the results of calling
// the getNumber function.

// Function parameters are always local to the function.
