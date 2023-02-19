"use strict";
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

// 내림차순 정렬
const decSortedArr = input.sort((a, b) => b - a);
console.log(decSortedArr.join(""));
