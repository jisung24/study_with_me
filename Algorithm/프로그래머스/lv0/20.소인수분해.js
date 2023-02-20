"use strict";

let n = 12;
let canDivide = [];
for (let i = 2; i <= n; i++) {
  // 나눌 수 있는 최솟값을 구한다...!
  if (n % i === 0) {
    // 나눌 수 있는 최솟값..!
    canDivide.push(i);
  }
}
console.log(canDivide);
