// Consider the two code snippets:

let x = "5";
x = x + 1;
// returns: "51"

let y = "5";
y++;

console.log(`x = ${x}`);
console.log(`y = ${y}`);

// What gets returned by y++ in the second snippet, and why?

// Ok, so lets think through this. What makes y++ different from x = x + 1? What
// is going on underneath the hood? I believe that, in the case of y++, any string
// value is going to be coerced to a number, which is not the case in x = x + 1.
// Thus, the output will be 6. I was correct, but I do not know why this happens.
// Maybe it has to do with the way things are incremented in memory? Or maybe it
// is just an explicit JS rule that runs when the operation is performed.
