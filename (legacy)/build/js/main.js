"use strict";
//  // L1 basics
let username = "uzair";
console.log(username);
let a = 18;
let b = 9;
let c = 3;
console.log(a, b, c);
console.log(a / b);
console.log(c * b);
// // L2 adding on
let myName = "Uzair";
let pie;
let isLoading;
let album;
pie = 3.14;
isLoading = true;
album = 1984;
album = "any data type allowed";
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 5));
let postId;
let isActive;
let re = /\w+/g;
// // L3
let strArr = ["one", "two", "three"];
let moves = ["kimura", "rnc", 5050];
let mixed = ["str", 741, true];
// strArr.push(42); -> failed because type
strArr.push("hello");
let myTuple = ["dave", 10, true]; // defined types and length
// myTuple[0] = 10 // failed because types at each index is edfined
myTuple[0] = "stanley";
let myObj;
myObj = strArr; // valid since arrays are a type of object
myObj = {};
const expObj = {
    name: "uzair",
    age: 25,
};
expObj.age;
let uzair = {
    name: "uzair",
    active: true,
    albums: [1945, "test"],
};
let test = {
    name: "another",
    albums: [1945, "test"],
};
const greeting = (singer) => {
    return `Hello ${singer.name}`;
};
// literal types
let userName;
let userNameTwo;
userNameTwo = "amy";
// functions
const add = (a, b) => {
    return a + b;
};
// no return so void type -> side effect
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(1, 10));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (a, b) {
    return a * b;
};
//optional parameters
let addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
let sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// rest operator
const total = (...nums) => {
    return nums.reduce((prev, next) => prev + next);
};
console.log(total(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// never types are good to identify error like in the following infinite loop
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // without this line we get the never type - with it we get void since no return
    }
};
const numOrStr = (value) => {
    if (typeof value === "number")
        return "number";
    if (typeof value === "string")
        return "string";
    return createError("this should never happen");
};
//convert to less or more specific
let numOne = "hello";
let numTwo = numOne; // less specific because we are saying numTwo is equal to numOne or any Y type
let numThree = numOne;
// not useable in react
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(1, 234, "concat");
// assertions in the dom
const img = document.getElementById("img");
const myImg = document.getElementById("#img");
img.src;
myImg.src;
