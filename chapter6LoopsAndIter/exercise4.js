// Does the following code produce an error? Why or why not?
// What output does this code send to the console?

for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

// Ok so, first of all, lets identify the two oddities here that I'm not familiar with. The first is the fact that there
// appears to be no decrement condition listed in the for loop. Instead, the increment is performed in the code block.
// Further complicating things is that the increment is being passed into the console.log function. I'm not precisely
// sure what is going to happen when I run this code, but here is my guess: I don't think that the code is going to
// throw an error. I think its going to run, and with each loop, due to the code in the code block incrementing the
// variable, the value will increment by 1. Once the value reaches 5, the loop will stop. The console will log
// each value returned by the assignment, which would be 1, 2, 3, 4... and then the loop would stop.

// To note: All three components of the for loop are apparently optional. You do not have to put anything there -
// JavaScript will run the code anyway. The other thing I got wrong is that the loop will actually increment up to
// 5, not 4. This is because i is incremented in the code block, so the console.log function will always return
// i + 1 with whatever i is currently being iterated on.
