"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let length = input[0];
let stack = [];
let result = [];
for (let i = 1; i <= length; i++) {
  let command = input[i].split(" ");
  //   console.log(command[0]);
  switch (command[0]) {
    case "pop":
      result.push(stack.pop() || -1);
      break;

    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;

    case "empty":
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case "size":
      result.push(stack.length);
      break;

    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
