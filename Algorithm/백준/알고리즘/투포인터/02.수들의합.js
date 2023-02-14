"use strict";
// 구간의 합을 15인 위치를 구해라...!

// arr은 1부터 15까지의 배열.
let m = Number(require("fs").readFileSync("dev/stdin").toString());
let arr = Array.from({ length: m }, (_, i) => i + 1);

let left = 0;
let right = 0;
let sum = arr[0];
let answer = 0;

while (right < arr.length) {
  if (sum < m) {
    right++;
    sum += arr[right];
  } else if (sum === m) {
    // 둘이 같은 경우...!
    answer++; //정답처리..!
    right++;
    sum += arr[right];
  } else if (sum > m) {
    sum -= arr[left];
    left++;
  }
}

console.log(answer);
