"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let tc = Number(input.shift());
let spendTime = input
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
