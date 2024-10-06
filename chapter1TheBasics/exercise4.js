// Explain why this code logs '510' instead of 15:

console.log("5" + 10);

/* This is because JavaScript "coerces" the 10 to become a string when it is added to another
string, thus turning the operation into a concatenation. THis is called implicit type coercion.
In the case of substratcting a number from a string nubmer representation, the opposite
occurs. */

console.log();
