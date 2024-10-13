function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (50 >= num && num >= 0) {
    console.log(`${num} is between 0 and 50`);
  } else if (100 >= num && num >= 51) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-30);

// I was more explicit than necessary in this case. The && was redundent, I could
// have had the log run with num <= 50, num <=100, because it is in sequential order
// of highest to lowest. However, I think my way is actually more readible, because
// it explicitly states the range.
