"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  let [nums, ...arr] = input[i].split(" ").map(Number);
  let avg = arr.reduce((acc, cur) => acc + cur) / arr.length;
  let overAvgStu = arr.filter((ele) => ele > avg);

  console.log(((overAvgStu.length / arr.length) * 100).toFixed(3) + "%");
}
