// What does the following code log to the console?

function scream(words) {
  words = words + "!!!!!";
  return;
  console.log(words);
}

scream("Yipeeeee");

// The following code is going to log undefined to the console. words is assigned
// in the function, but not returned. The return statement returns a value, and
// also exits the function; since no value is returned, and the function ends after
// returning, which means console.log(words) never runs, the function will return
// undefined, but will not log anything to the console.
