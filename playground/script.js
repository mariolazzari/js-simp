// Variables
let a = 1;
let b = 2;
let c = 3;
let d = a;

console.log(a);
console.log(d);

// Number
let int = 1;
let float = 1.1;

console.log(typeof int);
console.log(typeof float);
console.log(float + int);
console.log("(a+b)/c = ", (a + b) / c);

a = 1.2;
b = 2.2;
console.log("a+b=", a + b);
console.log("a*b=", a * b);

// Strings
let str = "a string";
console.log(str);
console.log(typeof str);

let str2 = " is " + str;
str += str2;
console.log(str);

// Boolean
let aTrue = true;
let aFalse = false;
let testBool = aTrue + aFalse;
console.log(testBool);
console.log(typeof testBool);

const and = aTrue && aFalse;
const or = aTrue || aFalse;
console.log(and, or);
console.log(!and, !or);
