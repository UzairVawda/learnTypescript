//  // L1 basics
let username = "uzair";
console.log(username);

let a: number = 18;
let b: number = 9;
let c: number = 3;
console.log(a, b, c);

console.log(a / b);
console.log(c * b);

// // L2 adding on

let myName: string = "Uzair";
let pie: number;
let isLoading: boolean;
let album: string | number;

pie = 3.14;
isLoading = true;
album = 1984;
album = "any data type allowed";

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(5, 5));

let postId: string | number;
let isActive: number | boolean;
let re: RegExp = /\w+/g;

// // L3
let strArr: string[] = ["one", "two", "three"];
let moves: (string | number)[] = ["kimura", "rnc", 5050];
let mixed: any[] = ["str", 741, true];

// strArr.push(42); -> failed because type
strArr.push("hello");

let myTuple: [string, number, boolean] = ["dave", 10, true]; // defined types and length
// myTuple[0] = 10 // failed because types at each index is edfined
myTuple[0] = "stanley";

let myObj: object;
myObj = strArr; // valid since arrays are a type of object
myObj = {};

const expObj = {
  name: "uzair",
  age: 25,
};

expObj.age;

// can also use interface
type Singer = {
  // interface Singer
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let uzair: Singer = {
  name: "uzair",
  active: true,
  albums: [1945, "test"],
};

let test: Singer = {
  name: "another",
  albums: [1945, "test"],
};

const greeting = (singer: Singer) => {
  return `Hello ${singer.name}`;
};
// console.log(greeting(test));

// // L4 functions
// type alias
type stringOrNumber = string | number;
type stringOrNumArray = (string | number)[];
type Guitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumArray;
};
type userId = stringOrNumber;

// literal types
let userName: "dave";
let userNameTwo: "dave" | "john" | "amy";
userNameTwo = "amy";

// functions

const add = (a: number, b: number): number => {
  return a + b;
};

// no return so void type -> side effect
const logMsg = (message: any) => {
  console.log(message);
};

logMsg("hello");
logMsg(add(1, 10));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type math = (a: number, b: number) => number;

let multiply: math = function (a, b) {
  return a * b;
};

//optional parameters
let addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value
let sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

// rest operator
const total = (...nums: number[]): number => {
  return nums.reduce((prev, next) => prev + next);
};
console.log(total(1, 2, 3, 4, 5));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

// never types are good to identify error like in the following infinite loop
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // without this line we get the never type - with it we get void since no return
  }
};

const numOrStr = (value: number | string): string => {
  if (typeof value === "number") return "number";
  if (typeof value === "string") return "string";
  return createError("this should never happen");
};

// L5
// type casting
type X = string;
type Y = string | number;
type Z = "hello";

//convert to less or more specific
let numOne: X = "hello";
let numTwo = numOne as Y; // less specific because we are saying numTwo is equal to numOne or any Y type
let numThree = numOne as Z;

// not useable in react
let d = <X>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(1, 234, "concat") as string;

// assertions in the dom
const img = document.getElementById("img") as HTMLImageElement;
const myImg = document.getElementById("#img") as HTMLImageElement;
img.src;
myImg.src;
