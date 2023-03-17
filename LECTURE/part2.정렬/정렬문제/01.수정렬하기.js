"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]);
let arr = [];
let answer = "";
// N을 활용도 하고..!
for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

/**
 *
 * @param {*} arr : 정렬 배열
 * @returns : 정렬된 배열
 */
let incSort = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
};

incSort(arr); // 정렬 완료

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
