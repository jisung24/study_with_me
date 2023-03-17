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
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a, b) => a - b);
console.log(uniqueArray);
let answer = "";
let hash = {};

// 동빈나 코드 수정
let myMap = new Map(); //
for (let i = 0; i < uniqueArray.length; i++) {
  myMap.set(uniqueArray[i], i);
}
console.log(myMap);

for (let x of arr) answer += myMap.get(x) + " ";
// arr에 있는 x의 값을 myMap에서 가져와서 값을 출력
console.log(answer);

// Map도 hash함수이다...!

// 역시...
// hash가 짱이야!!
// hash와 정렬을 이용한 문제..!

// 문제 이해
// 오름차순을 한 정렬에선 자기 자신보다 작은 수는 그 수의 index이다.
// [1,2,3,4,5] /
// 4보다 작은 수 => 4의 index
// 그래서 hash로 4의 index를 se

// 필요한 정보 : 나보다 작은 수의 개수
// ❗️핵심❗️
// 🔴 👉 오름차순을 하고, 나보다 작은 수의 개수는 자기 자신의 index와 같다...! 🔴

// 정렬이 왜 필요했냐면...!
// ❗️자기보다 작은 수가 자신의 index번호와 같다는 걸 알려주기 위해서이다!!!!!❗️
