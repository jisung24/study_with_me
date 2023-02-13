"use strict";
// 7개의 자연수 중 홀수를 구해서 각 합을 구하고,
// 고른 홀수들 중 최솟값을 찾는 프로그램을 짜자.

let arr = [12, 77, 38, 41, 53, 92, 85];

let findMinOddValue = (arr) => {
  // 홀수 filter => 합 => 다시 고른 filter중 최솟값
  let copyArr = [...arr].filter((ele) => ele % 2 === 1);
  let sumOfArr = arr
    .filter((ele) => ele % 2 === 1)
    .reduce((acc, cur) => acc + cur);

  let minValue = Math.min(...copyArr);

  return [sumOfArr, minValue];
};
console.log(findMinOddValue(arr));
