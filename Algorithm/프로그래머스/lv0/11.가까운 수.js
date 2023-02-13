"use strict";
let arr = [10, 20, 3];
let n = 15;
let absArr = [];
// 수를 하나하나씩 비교해가며 푸는 문제 같은데...
function solution(arr, n) {
  absArr.push(Math.abs(arr[0] - n));
  // 한 번 넣고 시작함.
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - n) <= absArr[absArr.length - 1]) {
      absArr.push(Math.abs(arr[i] - n));
    } else {
      continue; // 아니면 그냥 넘겨준다..!
    }
  }
  if (absArr.length >= 2) {
  }
}

solution(arr, n);

// 가까운 수가 여러개...!!!
