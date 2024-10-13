// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);

// I believe, in this case, the console will output "Not Empty." The reason for this
// is because JavaScript has a specified set of values that it determines to be
// falsey, including empty strings, 0, undefined etc. Empty arrays, such as [],
// are not included among those values. An empty array, according to JavaScript,
// is a "truthy" value, because JavaScript does not explicitly identify it as
// falsey.
