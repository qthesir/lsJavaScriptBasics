obj1 = { test: "test" };
obj2 = { hello: "mr" };
prim = 5;

function objChanger(objTest, objTest2, primTest) {
  objTest.test = "not a test, ha!";
  objTest2 = { new: "obj" };
  primTest = 6;
}

objChanger(obj1, obj2, prim);

console.log(obj1);
console.log(obj2);
console.log(prim);
