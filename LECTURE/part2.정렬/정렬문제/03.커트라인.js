"use strict";
// k등까지는 상을 받는데, 상을 받는 사람 중 가장 낮은 점수.
// 즉 k등의 점수를 구하여라

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [N, k] = input[0].split(" ").map(Number);
let scores = input[1].split(" ").map(Number);

let incSortScore = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  });
};
incSortScore(scores); // 점수 정렬

console.log(scores[k - 1]);
