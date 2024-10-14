/* We'll return to the simpler one-dimensional array. In this problem, 
we want to use the map function to create a new array that contains one 
element for each element in the original array. If the element is an even value, 
then the corresponding element in the new array should contain the string 'even'; 
otherwise, the element in the new array should contain 'odd'.*/

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

mappedArray = myArray.map(function (element) {
  if (element % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

console.log(mappedArray);

mappedArray2 = myArray.map((element) => (element % 2 === 0 ? "even" : "odd"));

console.log(mappedArray2);
