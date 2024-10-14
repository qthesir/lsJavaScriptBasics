let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  let newArray = array.filter((element) => Number.isInteger(element));
  return newArray;
}

let integers = findIntegers(things);

console.log(integers);
