// What happens when you run the following code? Why?

const NAME = "Victor";

console.log("Good morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";

console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

// The program throws a reference error when we attempt to set NAME equal to 'Joe', because
// NAME was declared as a constant.
