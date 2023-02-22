// "use strict";

// // numer1      numer2
// // denom1      denom2

// // 첫 번째
// // 1. 어떤 수가 더 큰 수인지 구하자..!
// let numer1 = 1;
// let denom1 = 2;

// let numer2 = 3;
// let denom2 = 4;

// // 일단 싹 다 곱하자.

// console.log(Number.isInteger(4.5));

let one = [];
let nums = [1, 1, 3, 2, 1, 4, 3, 1, 1, 7, 9];

let value = nums.indexOf(1);
one.push(value);

while (value !== -1) {
  value = nums.indexOf(1, value + 1);
  if (value !== -1) {
    one.push(value);
  }
}
console.log(one);
