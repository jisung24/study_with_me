"use strict";
// N = 6
// M = 3
// N의 약수들 중 3번째로 작은 수..(오름차순해서 M-1 index접근하면 돼)

// 우선 다 돌면서 약수를 찾아야 돼...! (브루트 포스)
// 약수의 경우의 수를 다 찾아야 돼! => 되는 지 안 되는 지..!

let [N, M] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let prime = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    prime.push(i); // 작은 수 부터 들어가니까 정렬 안 해줘도 돼!
  }
}
if (prime.length < M) {
  // 약수의 개수보다 M번째가 더 큰 경우 0을 출력
  console.log(0);
} else {
  // 그게 아니라면 M-1번째 있는 수 출력..1
  console.log(prime[M - 1]);
}
