// Which values do the following expressions evaluate to?

false || (true && false); // False
true || 1 + 2; //true
1 + 2 || true; // 3
true && 1 + 2; // 3
false && 1 + 2; // false
1 + 2 && true; // true
32 * 4 >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === "847"); // true
false === (847 == "847"); // false

!true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // true

// Only thing I missed were the logical operators on the 5th and 6th line.
// These operators short-circuit and return the last value they evaluate, which
// may not necessarily be boolean. It can be the value which contained truthiness
// to lead to a certain value.
