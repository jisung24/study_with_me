"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let countOfStrings = Number(input.shift());

/**
 *
 * @param {*} strArr : 입력받은 문자열로 돼 있는 배열
 * @returns 문자열들 중에 가장 길이가 긴 문자열을 return해주자!
 */
let printTopOfLength = (strArr) => {
  let copyArr = [...strArr];
  let sortLengthArr = copyArr.sort((a, b) => b.length - a.length);
  // 가장 큰, 가장 작은을 구하는 문제가 있을 땐, max min도 좋지만 sort함수도 있다!!!
  return sortLengthArr[0];
};

console.log(printTopOfLength(input));

//❗️ arr에서 가장 많은, 가장 적은 => sort함수를 한 번 써보자!❗️
