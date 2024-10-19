// Challenging exercise. Earlier, we learned that Number.isNaN(value) returns true
// if value is the NaN value, false otherwise. You can also use
// Object.is(value, NaN) to make the same determination.

// Without using either of those methods, write a function named isNotANumber
// that returns true if the value passed to it as an argument is NaN, false if
// it is not.

numTest = NaN;
numTest2 = 3;

function isNotANumber(number) {
  if (typeof number === "number" && String(number) === "NaN") {
    return true;
  } else {
    return false;
  }
}

function isNotANumber2(number) {
  return value !== value;
}

console.log(isNotANumber(numTest));
console.log(isNotANumber(numTest2));

// Ok, so, equalities don't really work on NaN. I don't quite remember why that is,
// but they don't work. The simpliest solution I can think of is converting NaN
// to a string and converting it that way, but how do I differentiate between
// something that comes into the function as the string 'NaN' vs. actual NaN?
// Well, I can handle that by checking to see if the incoming number is typeof number,
// which would ensure I'm not getting a string, but an actual NaN. Yes, the
// combination of the input value being a number and having a string equivilant of
// 'NaN' would ensure that the number is, in fact, NaN.

// Interesting solution from the book, which is probably most efficient: NaN is
// the only number in JS that is not equal to itself, so you can simply check whether
// the value equals itself, and if that returns false, it is NaN.
