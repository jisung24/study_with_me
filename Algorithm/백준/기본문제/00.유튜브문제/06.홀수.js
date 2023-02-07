"use strict";
// 주어진 수 중 홀수만을 골라 그 홀수의 합을 구하고, 고른 홀수들 중 최솟값을 골라내자!!

let arr = [12, 77, 38, 41, 53, 92, 85];
let sumOfOdd = arr
  .filter((ele) => ele % 2 === 1)
  .sort((a, b) => a - b)
  .reduce((acc, cur) => acc + cur);
console.log(`홀수 합>> ${sumOfOdd}`);

// 최솟값을 찾는거!
// 1. Math.min(...arr)
// 2. sort로 정렬을 해서, index[0] 고르면 돼!
