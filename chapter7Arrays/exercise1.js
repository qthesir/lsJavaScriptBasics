// In the following code, what are the final length values for array1, arary2, array3,
// array 4, and array5?

let array1 = [1, 2, undefined, 4]; // array1 length = 4

let array2 = [1];
array2.length = 5; // array2 length = 5

let array3 = [];
array3[-1] = [1]; // array3 length = 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // array4 length = 3, the last 2 values are truncated.

let array5 = [];
array5[100] = 3; //array length = 100. JavaScript initializes the missing elements
// as empty. This was my one wrong answer. You need to add 1 to the index position,
// because the initial index is 0, so this array actually has a length of 101.
