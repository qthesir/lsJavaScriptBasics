function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

barCodeScanner("113");

// Because there aren't any "break" statements underneath each of the cases, case
// 113 will run, and then fall through the remaining cases (case '142' and the
// default case). Thus, "Product 2", "Product3", and "Product not found!" will all
// be logged to the console.
