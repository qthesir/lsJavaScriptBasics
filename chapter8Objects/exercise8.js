let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, keys = false) {
  let newObj = {};
  if (!keys) {
    newObj = Object.assign({}, obj);
  } else {
    for (let i in keys) {
      let key = keys[i];
      console.log(keys[key]);
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }

// The code provided in the solution key was a bit more elegant than mine. It used the
// .forEach method on the keys instead of a for loop, which reduced the amount of code
// although I suppose practically speaking the two solutions were pretty similar.
// I used the same approach for a complete copy, using the assign Object method.
