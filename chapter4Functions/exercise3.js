function getNumber(prompt) {
  let rlSync = require("readline-sync");
  let num = rlSync.question(prompt);
  return Number(num);
}

firstNumber = getNumber("Enter the first number: ");
secondNumber = getNumber("Enter the second number: ");

console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
