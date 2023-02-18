"use strict";
// 정렬하고 중앙값을 구하자..!
const arr = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const copyArr = [...arr];
// 평균도 자연수로...!
let avg = parseInt(copyArr.reduce((acc, cur) => acc + cur) / copyArr.length);
let centerValue = copyArr[Math.floor(copyArr.length / 2)];
console.log(avg);
console.log(centerValue);
