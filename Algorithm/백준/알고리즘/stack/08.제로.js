"use strict";
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let stack = [];

for (let i = 1; i < input.length; i++) {
  input[i] === 0 ? stack.pop() : stack.push(input[i]);
}

let sumOfStack = stack.length === 0 ? 0 : stack.reduce((acc, cur) => acc + cur);
console.log(sumOfStack);
