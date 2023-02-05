"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

/**
 * 배열을 입력받아서, 그 배열의 최솟값을 출력한다.
 * @param {*} arr : 입력받은 배열
 * @returns 최솟값
 */
let findMinValue = (arr) => {
  return Math.min(...arr);
};
console.log(findMinValue(input));
