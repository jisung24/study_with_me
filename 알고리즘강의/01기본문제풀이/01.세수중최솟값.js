"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

/**
 * 100이하의 자연수 3개로 이루어진 배열을 입력받아 가장 작은 값을 출력하는 프로그램.
 * @param {*} arr : 입력받을 배열
 * @returns : 최솟값을 출력한다.
 */
let solution = (arr) => {
  return Math.min(...arr);
};

console.log(solution(input));
