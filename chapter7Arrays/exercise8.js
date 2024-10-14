// Write a function similar to the oddLengths function from Exercise 6,
// but don't use map or filter. Instead, try to use the reduce method.

let arr = ["a", "abcd", "abcde", "abc", "ab"];

// function oddLengths(array) {
//   mappedArray = array.map((element) => element.length);
//   filterArray = mappedArray.filter((element) => !(element % 2 === 0));
//   return filterArray;
// }

function oddLengths(array) {
  lengths = array.reduce((accumulator, element) => {
    accumulator.push(element.length);
    return accumulator;
  }, []);

  oddArray = lengths.reduce((accumulator, element) => {
    if (!(element % 2 === 0)) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);

  return oddArray;
}

console.log(oddLengths(arr)); // => [1,5,3]

// Originally, I was struggling to get the array accumulation to work because I was
// not explicitly returning the accumulator. I had setting the initial value as an
// array correct, and then pushing the element to the accumulator, but that was
// returning the value of accumulator.push, which was whatever the array length was,
// rather than the accumulator array, which was throwing the error when I called the
// array again on the second iteration. When I moved into an explicit function, the
// error was on undefined, because I wasn't returning anything to the function.
// I also could have combined the length and filtration into the same reduce function,
// which would have been a more efficient solution in terms of memory and compute.
