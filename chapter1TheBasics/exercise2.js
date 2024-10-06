// My solution

let bigNumber = 4596;
function getDigit(number, index) {
  return parseInt(String(number)[index]);
}
let thousandsPlace = getDigit(bigNumber, 0);
let hundredsPlace = getDigit(bigNumber, 1);
let tensPlace = getDigit(bigNumber, 2);
let onesPlace = getDigit(bigNumber, 3);

console.log(thousandsPlace, hundredsPlace, tensPlace, onesPlace);

// Book correct solution

let number = 4596;
let ones = number % 10;

number = (number - ones) / 10;

let tens = number % 10;

number = (number - tens) / 10;

let hundreds = number % 10;
let thousands = (number - hundreds) / 10;

console.log(thousands, hundreds, tens, ones);

// I did not pick up on the detail to use only arithmetic operators, which is
// why I ended up with that solution .
