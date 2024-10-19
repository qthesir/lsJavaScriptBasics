// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// Array2 will log [1,4,3], which is the same value of array1. The reason for this is because, when assigning array2
// to array1, you are assigning it the same address value that references the same object in the heap. array1[1] = 4
// is reassigning the second element (primitive) in array1, but this is also mutating an object property on the array
// object associated with the address value being used by both array1 and array2. Thus, both variables are pointing to
// the mutated object.
