"use strict";
// 자기 보다 작은 수의 개수를 출력...!
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let smallerThanMe = (arr, ele) => {
  // 사실 굳이 정렬은 필요없어...!
  let dec = arr.filter((v) => v < ele); // ele보다 작은 원소의 개수..!

  return dec.length;
};

let arr = input[1].split(" ").map(Number);
let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += smallerThanMe(arr, arr[i]).toString() + " ";
}
console.log(answer);

// 1. 메모리 초과
