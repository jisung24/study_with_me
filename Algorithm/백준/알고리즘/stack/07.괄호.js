"use strict";
// ( ) 2개밖에 없어서 풀기 쉬워..1
// 여는 괄호가 나오면 계속 push
// 닫는 괄호가 나오면 최근 stack.length - 1번쨰 값을
// 확인해보고... 여는 괄호가 나와야 pop
// 아니라면 바로 false
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let tc = Number(input[0]);
let answer = [];
for (let i = 1; i <= tc; i++) {
  let stackCnt = 0;
  let stack = [];
  console.log(`${input[i]} start!!`);

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      // 여는 괄호일 경우...!
      stackCnt += 1; // stack에 값을 넣어줌!
      console.log(stackCnt);
    } else {
      // 닫는 괄호일경우...!
      stackCnt -= 1;
    }
  }
  if (stackCnt !== 0) {
    answer.push("No");
  } else {
    answer.push("Yes");
  }
}
console.log(answer.join("\n"));
