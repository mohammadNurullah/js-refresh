//--LEXICAL SCOPE--//
var name = "javascript";
function myFunction(topic) {
  var name = topic; // var function scope
  //console.log(name);

  if (true) {
    let a = 41; // const & let block scope
    // console.log(a);
  }
  // console.log(a); // will get error
}
myFunction("python");
//console.log(name);

//--FUNCTIONS--//

// Regular Function or Traditional Function
function regular() {
  console.log("Hello World! from regular");
}
//regular();

// Function Expression
const hello = function () {
  console.log("Hello World! from expression");
};
// hello();

// Named Function Expression
const namedFunc = function test() {
  console.log("Hello World! from Named function");
};
// hello();

// Arrow Function
const arrowFunc = () => {
  console.log("Hello World! from Arrow function");
};
// arrowFunc();

// Anonymus Function
const arwFn = () => {
  return () => {
    console.log("Hello World! from Anonymus function");
  };
};
const res = arwFn();
// res();

//--PREMITIVE & REFERENCE VALUE--//

// Premitive type value
let x = 1;
let y = 2;
x = y;
y = 3;

// console.log(x);
// console.log(y);

// Reference type value

let arr1 = ["Js", "python"];
let arr2 = ["java", "cpp"];

arr2 = arr1;
arr1.push("Go");
// console.log(arr1);
// console.log(arr2);

//--SPREAD & REST OPERATOR--//

// let fruits = ["banana", "orange"];
// let language = ["Js", "python"];

// fruits = [...language];
// language.push("java");

// console.log(fruits);
// console.log(language);

let user = [
  {
    name: "Karim",
  },
  {
    name: "Rahim",
  },
];

let id = ["01", "02"];

id = [...user];
// console.log(id);
// console.log(user);

const sum = (text, ...rest) => {
  const result = rest.reduce((total, curVal) => total + curVal, 0);
  console.log(`${text} ${result}`);
};
// sum("The sum is =", 1, 2, 3, 4);

const information = {
  stdName: "Sakib",
  madrasha: {
    madrashaName: "Madinatul Ulum Kamil Madrasha",
    language: {
      // lang: "python",
    },
  },
};

// const { madrasha: { language: { lang } } = {} } = information;
//console.log(information?.madrasha?.language?.lang); // optional chain

//console.log(lang);

//--TRUTHY & FALSY VALUE--//

// false, 0, null, undefined, NaN, ''; js e eigula falsy value

//--SHORT CIRCUITS OPERATOR--//

// null & undefined

let lan = "python";
// console.log(lan ?? "Js");
// console.log(lan || "Js");
// console.log(lan && "Js");

//--ASYNCHRONUS DATA FETCHING--//

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    console.log(data?.title);
  } catch (err) {
    console.error(err);
  }
}

function somethingWork() {
  return getData();
}

(async () => {
  const apiResult = await somethingWork();
})();
