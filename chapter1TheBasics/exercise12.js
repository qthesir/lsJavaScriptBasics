// The following will evaluate to false, since the length of the first value is less than
// the second

result = "12" < "9";

console.log(result);

// I was wrong. It evaluated to true. I could have suspected that, being a trick question...
// But I cannot think of a reason that would evaluate to true. Perhaps it is taking the
// first digit? It parseInts or something?

// Turns out I was sort of right. When you compare 2 strings, JavaScript goes character-by
// character, left to right, so on the first comparison '1' < '9', it determines that
// '12' must be less than '9'. Weird.
