// What does the following function do?

function doSomething(string) {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
}

// The above function is using the method chaining syntax in javascript, and it is
// doing the following: The method takes a string and first splits it into an
// array of strings with the a single space (" ") as the delimeter. It then
// reverse the order of the words (['Hi', 'there'] would be ['there', 'Hi'])
// and returns a new array with the length of each word ([5,2]) using the .map
// function.

console.log(doSomething("Hi there"));
