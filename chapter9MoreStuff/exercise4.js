// Given a list of numbers, write some code to find and display the largest numeric
// value in the list (list can be found in JS book)

list1 = [1, 6, 3, 2];
list2 = [-1, -6, -3, -2];
list3 = [2, 2];

function findMax(list) {
  return Math.max(...list);
}

console.log(findMax(list1));
console.log(findMax(list2));
console.log(findMax(list3));
