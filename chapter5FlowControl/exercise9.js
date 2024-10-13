// Without running this code, what will it print?

console.log(false ?? null); // false
console.log(true ?? 1 + 2); // true
console.log(1 + 2 ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? 1 + 2); // 3
console.log(1 + 2 ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

// Reminder: The above code is a nullish coallescing operator. The operator has a
// simple rule: It will evaluate to the right value if the left hand value is
// nullish (undefined or null) and the left hand value if the left hand
// value is not null.
