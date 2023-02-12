"use strict";
const [testCase, ...bars] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n") // 배열로 만들고,
  .map(Number); // 숫자로 전부 바꿔줌.

let reverseBars = bars.reverse();
let count = 1; // 일단 나는 무조건 보임..
let stack = [reverseBars[0]]; // 6을 넣고 시작해...!
console.log(reverseBars);

for (let i = 1; i < reverseBars.length; i++) {
  reverseBars[i] > stack[stack.length - 1] && stack.push(reverseBars[i]);
}
console.log(stack.length);
