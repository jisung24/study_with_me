"use strict";
// M은 100만 엔로그앤 사용 가능하다.

// ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️
// 오 console.log로 하니까 바로 시간초과!!!

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

// 오름차순
let incSort = (arr) => {
  return arr.sort((a, b) => a - b);
};
incSort(arr);
let answer = "";

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
  // console.log(answer); ==> console.log로 여러 줄 출력하지마!
}
console.log(answer);
