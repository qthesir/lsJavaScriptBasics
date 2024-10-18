// Add a qux property with value 3 to the myObj object we created in the previous
// exercise.

let myProtoObj = {
  foo: 1,
  bar: 2,
};
myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Now, examine the following code snippets:

// Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
});
// Snippet 2
for (let key in myObj) {
  console.log(key);
}

// Without running this code, can you determine whether these two snippets produce
// the same output? Why?

// I'm actually not sure. My best guess is that the first snippet is going to log
// all keys of both the prototype and the implementation object, while the second
// snippet will only log the implementation key, qux.

// I was wrong, other way around. Snippet two logs all keys, snippet one only logs
// the first key. That's what my gut told me. Why didn't I listen to it?
