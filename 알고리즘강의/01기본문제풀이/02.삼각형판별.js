"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

/**
 *
 * @param arr : 입력받는 값을 배열로 받는다.
 * @returns : 삼각형이 될 수 있는 지 없는 지 판단!
 */
let solution = (arr) => {
  // 가장 큰 변의 길이 < 나머지 두 변의 길이의 합
  let [maxValue, ...rest] = arr.sort((a, b) => b - a);
  let result = maxValue < rest.reduce((acc, cur) => acc + cur) ? "YES" : "NO";
  return result;
};
console.log(solution(input));
