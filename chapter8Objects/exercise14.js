// Identify all the variables, object property names, primitive values, and objects
// shown in the following code (assume the code has not been executed).

function hello(greeting, name) {
  return greeting + " " + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello("Hi", "Grace");
let foo = xyzzy();

// Variables: hello, greeting, name; xyzzy; howdy, foo, ;
// Object property names: a, b, c, d (technically, array indexs are
// property names too, so I missed 0, 1, and 2 from the xyzzy function. Function
// parameters are also not considered property names, as I had guessed. )
// Primitive values: ' '; 1, 2, 3, 4, 5; 'Hi', 'Grace'; (I also missed the fact that
// object property names are strings, so the property names would be included as
// well. )
// Objects: Hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, {}, [3,4,5]
