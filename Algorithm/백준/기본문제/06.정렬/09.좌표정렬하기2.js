"use strict";
// y좌표를 기준으로 오름차순으로 정렬하는데,
// 만약 y좌표가 같다면 x좌표를 기준으로 오름차순으로 정렬한다.
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
// 2차원 배열인데 각 원소의 index 0번을 기준으로 정렬한다..!
input.shift();

let numberDotArray = input.map((value) => {
  return value.split(" ").map(Number);
});
// console.log(numberDotArray);

let answer = "";

let sortedArray = numberDotArray
  .sort((a, b) => {
    if (b[1] !== a[1]) {
      return a[1] - b[1];
    } else {
      // 만약 같다면...!
      return a[0] - b[0]; // x오름차순
    }
  })
  .forEach((value) => {
    answer += value.join(" ") + "\n";
  });
console.log(answer);
