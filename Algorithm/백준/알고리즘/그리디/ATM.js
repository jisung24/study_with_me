"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// 즉, 가장 빠르게 돈을 뽑을 수 있는 방법은
// 계속 가장 빠른 사람대로 후다닥 처리하는 방법이다.
let people = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let sum = 0;
let total = 0;
for (let value of people) {
  sum += value;
  total += sum;
}
console.log(total);
