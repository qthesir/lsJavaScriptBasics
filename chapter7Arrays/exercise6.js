let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(array) {
  mappedArray = array.map((element) => element.length);
  filterArray = mappedArray.filter((element) => !(element % 2 === 0));
  return filterArray;
}

console.log(oddLengths(arr)); // => [1,5,3]
