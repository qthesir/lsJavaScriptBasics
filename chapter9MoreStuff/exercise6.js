// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument. The function should
// return all matching elements in an array.

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

function allMatches(array, regex) {
  // regexWithGlobal = RegExp(regex.source, "g");
  matches = [];
  for (let word of array) {
    if (regex.test(word)) {
      matches.push(word);
    }
  }
  return matches;
}

function allMatchesFilter(array, regex) {
  return array.filter((word) => regex.test(word));
}

console.log(allMatches(words, /lab/));
console.log(allMatchesFilter(words, /lab/));
