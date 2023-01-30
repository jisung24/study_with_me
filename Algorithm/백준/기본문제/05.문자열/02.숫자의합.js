"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const tc = Number(input[0]);

/**
 * ❗️문자열을 입력받아, 숫자로 바꾸고 각 숫자들의 합을 출력해주는 함수❗️
 * @param {*} strNumbers : 입력받은 숫자문자열
 * @returns : 숫자들의 합을 출력해준다.
 */
let sumOfNumbers = (strNumbers) => {
  let sum = strNumbers
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);

  return sum;
};
console.log(sumOfNumbers(input[1]));
