//There are other ways to detect a -0 value. Without using Object.is,
// write a function that will return true if the argument is -0, and
// false if it is 0 or any other number.

test1 = -0;
test2 = 0;
test3 = -50;
test4 = 50;
test5 = Infinity;
test6 = -Infinity;

function isNegativeZero(number) {
  return 1 / number === -Infinity;
}

console.log(isNegativeZero(test1));
console.log(isNegativeZero(test2));
console.log(isNegativeZero(test3));
console.log(isNegativeZero(test4));
console.log(isNegativeZero(test5));
console.log(isNegativeZero(test6));

// I'm playing around with using multiplication rules to figure out how to determine
// if the value is -0 vs 0 or any other number. What about inequalities? No, that
// wont work. -0 times anything is still going to be -0, which you cant use to
// compare. I mean, I could use the same string approach as last time, just
// converting -0 to a string. That could work. Nope... trying to convert to
// a string just returns 0. What other rules could we use? Is -0 falsy or truthy?
// Both are falsey.

// Think I got it - instead of using multiplication, you can use division. When
// you do any number divided by -0, its -infinity. If you do any number divided by
// 0, its positive infinity. And +infinity/-infinity can be compared predictably.
// Now to figure out how to deal with the any other number problem. Any other
// number will also evaluate to infinity when divided by 0, so the value is not
// an issue. What is an issue is positive or negative: a negative number divided
// by 0 will give positive infinity). I could also standardize it by setting the
// numerator to 1, and in that case, the only way I could get -infinity is by
// dividing by -0. So all I have to do is check if its -infinity.

// Per the solution, it could potentially improve performance (on what metric I
// am uncertain) to add a check that the value is indeed 0, so unwanted division
// doesn't occur.
