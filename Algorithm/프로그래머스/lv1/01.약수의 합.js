"use strict";
// 약수 : n을 나누었을 때 나머지가 0이 되게 만드는 수

function solution(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) sum += i;
  }

  return sum;
}

console.log(solution(12));
console.log(solution(5));
