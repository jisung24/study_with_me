"use strict";
// [ 길이 최대 100000 ]
// 10^5 => n^2으로 찾으면 안 돼!
// 찾는 범위 => 이분 담색 범위 1 2 3 4 5
// 저걸 정렬해야 한다.
// 만약 indexOf로 하게되면 이거부터
// for 안에서 indexOf면 바로 out N^2
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]); // 5
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
  });
let cnt = Number(input[2]);
let findArr = input[3].split(" ").map(Number);

// 이제 찾아주면 돼!!!
let answer = "";

let binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] === target) return 1; //맞다면 1을 return
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  // start > end가 됐을 경우!
  return 0; // 문제에서 0을 return해준다고 함.
};

for (let i = 0; i < findArr.length; i++) {
  // 찾아주는 코드 적어주면 돼!
  let start = 0;
  let end = arr.length - 1;
}
