"use strict";

// 이건 nodejs로 맞힌사람 0명 ===> 즉, 풀 수 없음!
// 1000로그 1000 ==> 3000
// 따라서 N이 1000이면 1억 안 넘음

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

let incsort = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });
};
incsort(arr); // 내림차순 정렬..!

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
