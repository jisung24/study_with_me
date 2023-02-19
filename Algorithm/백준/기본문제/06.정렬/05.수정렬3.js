"use strict";
// nodejs로는 풀 수 없는 문제라고 나옴.
const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift(); // O(N);

let incSort = input.sort((a, b) => a - b);
console.log(typeof incSort[0]);
console.log(incSort.join("\n"));
