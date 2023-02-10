"use strict";
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.pop();
let open = ["(", "["]; // 여는 괄호
let close = [")", "]"]; // 닫는 괄호!
let answer = [];
for (let value of input) {
  let isCompare = true;
  let stack = [];
  if (value === ".") break;
  for (let i = 0; i < value.length; i++) {
    //
    if (open.includes(value[i])) {
      // "(" or "["
      stack.push(value[i]);
    } else if (value[i] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        isCompare = false;
      }
    } else if (value[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        isCompare = false;
      }
    } else {
      continue; // 다른 글자는 신경 안 써줘도 돼!
    }
  }
  if (stack.length > 0 || !isCompare) {
    answer.push("no");
  } else {
    answer.push("yes");
  }
}

console.log(answer.join("\n"));
