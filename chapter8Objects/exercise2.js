/* Which of the following values are valid keys for an object? */

1; // No

("1"); // Yes

undefined; // No

("hello world"); // Yes

true; // No

("true"); // Yes

// Was dead wrong on this one. All are valid keys. JavaScript coerces non-string values
// to strings. Apparently, this is a common issue that developers run into.
