// Write some code to replace the value 6 in the following array with 606;

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12],
];

function replace6(array) {
  let newArray = array;
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(6)) {
      index6 = array[i].indexOf(6);
      newArray[i][index6] = 606;
    }
  }
  return newArray;
}

console.log(replace6(arr));
