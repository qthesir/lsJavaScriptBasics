// Modify the age.js program you wrote in the exercises for the Input/Output chapter.
// The updated code should use a for loop to display the future ages.

rlSync = require("readline-sync");

let currentAge = Number(rlSync.question("How old are you? \n"));

currentAge = parseInt(currentAge);

// console.log(`You are ${currentAge} years old.`);
// console.log(`In ${10} years, you will be ${currentAge + 10} years old.`);
// console.log(`In ${20} years, you will be ${currentAge + 20} years old.`);
// console.log(`In ${30} years, you will be ${currentAge + 30} years old.`);
// console.log(`In ${40} years, you will be ${currentAge + 40} years old.`);

for (let i = 0; i < 5; i++) {
  if (i === 0) {
    console.log(`You are ${currentAge} years old.`);
    continue;
  }

  yearsIncrement = i * 10;
  console.log(
    `In ${yearsIncrement} years, you will be ${
      currentAge + yearsIncrement
    } years old.`
  );
}
