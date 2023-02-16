"use strict";
// 1. 여는 괄호 만큼 닫는 괄호도 나와야 돼!
// => 짝을 지어줘야 함... (stack)

// 2. 닫는 괄호가 먼저 나오면 안 돼!

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

for (let i = 1; i < input.length; i++) {
  let value = input[i].split("");
  let stack = [];
  let answer = true;
  console.log(`${i}번쨰 시도!`);
  // 1. 여는 괄호 만큼 닫는 괄호! (닫는 괄호는 나오면 안 돼!)
  for (let j = 0; j < value.length; j++) {
    if (value[j] === "(") {
      stack.push(value[j]);
    } else {
      // 닫는 괄호면 짝을 맞춰주기 위해.. pop한다..!
      if (stack.length === 0) {
        // 닫는 괄호가 처음에 나오면..
        answer = false;
        console.log(answer);
      } else {
        // 중간에 나오면 무조건 "Yes"? ==> ((()(
        stack.pop();
      }
    }
  }
  console.log(stack.length === 0);
}
