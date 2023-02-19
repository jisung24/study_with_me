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
let set = Array.from(new Set(input)); // 중복 제거.

let sortLength = set.sort((a, b) => {
  if (a.length !== b.length) {
    // 길이 순 정렬
    return a.length - b.length;
  } else {
    // 길이가 같다면 사전 순으로...!
    return a < b ? -1 : a == b ? 0 : 1;
    // 사전 순...
  }
});
console.log(sortLength.join("\n"));
