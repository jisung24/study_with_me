"use strict";
// 모든 점수를 점수 / 최댓값 * 100

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let scores = input[1].split(" ").map(Number);
let maxValue = Math.max(...scores);

let newScores =
  scores.map((ele) => (ele / maxValue) * 100).reduce((acc, cur) => acc + cur) /
  scores.length;
console.log(newScores);
