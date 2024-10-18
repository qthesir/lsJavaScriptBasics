// Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj = Object.create(myProtoObj);
myObj.newKey = 3;
console.log(myProtoObj);
console.log(myObj.foo);
