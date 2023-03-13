"use strict";
const [N, ...nums] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim() // 문자열 다루는 건 일단 trim그냥 적어주자...!
  .split("\n")
  .map(Number);

let incSort = nums
  .sort((a, b) => {
    return a > b ? 1 : -1;
  })
  .join("\n");

console.log(incSort);
