"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let tc = Number(input.shift()); // 뺀 값을 return한다
let spendTime = input // shift를 썼으니까 input에서 빠짐 => 즉, shift는 원본을 훼손한다.
  .join("")
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let result = 0;
let resultArr = [];
for (let i = 0; i < tc; i++) {
  sum += spendTime[i];
  result += sum;
}
console.log(result);
