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
