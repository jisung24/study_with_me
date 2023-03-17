"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const N = Number(input[0]);
// let arr = input[1].split(" ").map(Number);
// let set = Array.from(new Set(arr));

// let answer = "";
// for (let i = 0; i < arr.length; i++) {
//   // set에서 비교해서 filter로 걸러줌!
//   let num = set.filter((ele) => {
//     // ele는 set의 원소...!
//     return ele < arr[i];
//   });
//   answer += num.length + " ";
// }
// console.log(answer);

// 메모리 초과,...!
// 1. set이 메모리를 많이 먹나...?

let arr = input[1].split(" ").map(Number);

let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

let myMap = new Map();
let answer = "";
for (let i = 0; i < uniqueArr.length; i++) {
  myMap.set(uniqueArr[i], i);
  // 속성 : 등수
}

for (let i = 0; i < arr.length; i++) {
  answer += myMap.get(arr[i]) + " ";
}
console.log(answer);
