"use strict";
// 평균 and 중앙값
let arr = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim() // 빈 문자열이 배열에 들어갈 수 있음.
  .split("\n")
  .map(Number) // 배열의 모든 원소를 숫자로.!
  .sort((a, b) => {
    return a > b ? 1 : -1;
  });
// 여기까지 오름차순으로 정렬 해,,.!

let avg = parseInt(arr.reduce((acc, cur) => acc + cur) / arr.length);
let middle = arr[Math.floor(arr.length / 2)];
console.log(avg);
console.log(middle);
