// Log all of the even values from myArray to the console

let myArray = [
  [1, 2, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i++) {
  let subArray = myArray[i];
  for (let j = 0; j < subArray.length; j++) {
    let element = subArray[j];
    if (element % 2 === 0) {
      console.log(element);
    }
  }
}
