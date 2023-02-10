"use strict";
let [count, ...bars] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let max = bars[bars.length - 1]; // bars의 마지막 원소!
let reverse = bars.reverse();
let maxCout = 1;

for (let i = 1; i < reverse.length; i++) {
  if (reverse[i] > max) {
    max = reverse[i];
    maxCout++;
  }
}

console.log(maxCout);
