"use strict";
// 계속 stack에 쌓다가
// 0이 나오면 pop
// 결국 최종적으로 stack에 있는 원소들의 합.
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

// 이건 상수
let stack = [];
let answer = 0;
for (let i = 1; i <= input.length - 1; i++) {
  if (input[i] !== 0) {
    stack.push(input[i]);
  } else {
    // 0이면... : 제거 할 수가 있다고 문제에서 주어짐...
    stack.pop(); // 아닐 때 만 pop해주면 돼!
  }
}

for (let i = 0; i < stack.length; i += 1) {
  answer += stack[i];
}

console.log(answer);
