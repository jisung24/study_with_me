"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(Number(input[i]));
}

let incSort = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
};

let centerValue = (arr) => {
  return arr[Math.floor(arr.length / 2)];
};

let avg = (arr) => {
  return parseInt(arr.reduce((acc, cur) => acc + cur) / arr.length);
};

// 정렬
incSort(arr);

console.log(avg(arr));
console.log(centerValue(arr));

// trim문제
// 내가 stdin에다가 입력을 했을 때 가장 마지막에 커서가 놓임
// \n을 기준으로 split을 했을 때, 마지막에 공백이 하나 뜸.

// 그렇다고 내가 마지막에 있는 공백을 지워버리면 안 돼!
// 백준에서 원하는 입력이 아니기 때문이다.
