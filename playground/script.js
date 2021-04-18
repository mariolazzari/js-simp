// Variables
console.log("Variables");

let a = 1;
let b = 2;
let c = 3;
let d = a;

console.log(a);
console.log(d);

// Number
console.log("\nNumbers");

let int = 1;
let float = 1.1;

console.log("typeof int:", typeof int);
console.log("typeof float:", typeof float);
console.log(float + int);
console.log("(a+b)/c = ", (a + b) / c);

a = 1.2;
b = 2.2;
console.log("a+b=", a + b);
console.log("a*b=", a * b);

// Strings
console.log("\nStrings");

let str = "a string";
console.log(str);
console.log(typeof str);

let str2 = " is " + str;
str += str2;
console.log(str);

// Boolean
console.log("Boolean");

let aTrue = true;
let aFalse = false;
let testBool = aTrue + aFalse;
console.log(testBool);
console.log(typeof testBool);

const and = aTrue && aFalse;
const or = aTrue || aFalse;
console.log(and, or);
console.log(!and, !or);

// null
console.log("\nnull");

let nil = null;
console.log("null", null);
console.log("null is ", typeof nil);

// undefined
console.log("\nundefined");

let undef = undefined;
console.log("undefined", undef);
console.log("undefined is", typeof undef);

// Comparisons
console.log("\nComparisons");

console.log("a==b", a == b);
console.log("a!=b", a != b);
console.log("a<b", a < b);
console.log("a>b", a > b);
console.log("null == undefined", null == undefined);

// Functions
console.log("\nFunctions");

function add(a, b) {
  return a + b;
}

let sum = add(1, 2);
console.log("sum", sum);

function hi(name) {
  console.log("Hi " + name);
}
hi("Mario");

// Args
console.log("\nArguments");

function printVar(val) {
  console.log(val);
}

function func(x) {
  x("function argument");
}

func(printVar);

// callback
console.log("Callbacks");

function sumCallback(a, b, callback) {
  callback(a + b);
}

// handler
function handleSum(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleSum);

// Arrow fx
console.log("\nArrow FX");

const sumAF = (a, b) => a + b;
console.log("Sum AF = ", sumAF(1, 2));

const printName = name => console.log(name);
printName("Mario");

const printHi = name => `Hi ${name}`;
console.log(printHi("Mario"));

function func2(x, callback) {
  callback(x);
}

func2(10, val => console.log(val));

// Stack
console.log("\nStack");

function print(val) {
  console.log(val);
}

function doStuff(a, b, name) {
  print(sum(a, b));
  print(printHi(name));
}

// Hoisting
console.log("\nHoisting");
console.log(sumHoisted(1, 2));

function sumHoisted(a, b) {
  return a + b;
}

// hoisting not working with arrow functions (var!!!)
const addNotHoisted = (a, b) => a + b;
