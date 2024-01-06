//--LEXICAL SCOPE--//
var name = "javascript";
function myFunction(topic) {
  var name = topic; // var function scope
  //console.log(name);

  if (true) {
    let a = 41; // const & let block scope
    console.log(a);
  }
  //console.log(a); // will get error
}
myFunction("python");
//console.log(name);

//--FUNCTIONS--//

// Regular Function or Traditional Function
function regular() {
  console.log("Hello World! from regular");
}
regular();

// Function Expression
const hello = function () {
  console.log("Hello World! from expression");
};
hello();

// Named Function Expression
const namedFunc = function test() {
  console.log("Hello World! from Named function");
};
hello();

// Arrow Function
const arrowFunc = () => {
  console.log("Hello World! from Arrow function");
};
arrowFunc();

// Anonymus Function
const arwFn = () => {
  return () => {
    console.log("Hello World! from Anonymus function");
  };
};
const res = arwFn();
res();
