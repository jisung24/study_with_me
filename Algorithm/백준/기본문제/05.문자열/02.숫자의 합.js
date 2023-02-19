"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let numberCnt = Number(input[0]);
let str = input[1];
let sum = 0;
for (let value of str) {
  sum += Number(value);
}

console.log(sum);
