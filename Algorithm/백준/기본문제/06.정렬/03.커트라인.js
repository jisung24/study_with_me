"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [people, cutLine] = input[0].split(" ").map(Number);
let scoreArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

/**
 * 학생들의 점수들과 상 받는 최대 등수를 입력하고, 그 등수에 해당되는 점수를 return
 * @param {*} scoreArr : 학생들의 점수
 * @param {*} cutLine : 커트라인 등수
 * @returns
 */
let chooseCutLineScore = (scoreArr, cutLine) => {
  let copyScoreArr = [...scoreArr];

  return copyScoreArr[cutLine - 1];
  // index는 0부터 등수는 1부터 시작하니까
  // 2등이면 index 1번이 됨.
};
console.log(chooseCutLineScore(scoreArr, cutLine));
