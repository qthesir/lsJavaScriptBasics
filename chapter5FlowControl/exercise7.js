function toUpperCase10(stringVal) {
  if (stringVal.length > 10) {
    return stringVal.toUpperCase();
  } else {
    return stringVal;
  }
}

console.log(toUpperCase10("simply"));
