"use strict";
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let tc = input[0];
let stack = [];
let answerArr = [];
for (let i = 1; i <= tc; i++) {
  // console.log(input[i]);
  for (let j = 0; i < input[i].length; j++) {
    if (input[i][j] === "(") {
      stack.push(input[i][j]); // Push를 해줘.
    } else {
      // 닫는 괄호인데...
      if (stack.length === 0) {
        answerArr.push("no");
      } else {
        stack.pop();
      }
    }
  } // j루프 끝남!

  stack.length === 0 ? answerArr.push("yes") : answerArr.push("no");
}

console.log(answerArr.join("\n"));
