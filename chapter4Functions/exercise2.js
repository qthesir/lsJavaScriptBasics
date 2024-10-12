// rlSync = require("readline-sync");

// function askFirstName() {
//   firstName = rlSync.question("What is your first name? \n");
//   return firstName;
// }

function askName(prompt) {
  rlSync = require("readline-sync");
  Name = rlSync.question(prompt + " \n");
  return Name;
}

firstName = askName("What is your first name?");
lastName = askName("What is your last name?");

console.log(`Hello ${firstName} ${lastName}!`);
