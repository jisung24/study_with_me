"use strict";
let solution = (number) => {
  let sum = 0; // 약수들의 합
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) sum += i;
  }

  return sum;
};

// console.log(solution(7));

{
  // 1. 0으로 나눠봤자 계속 무한. => infinity
  // 2. 나머지 연산자는 해당 수 보다 클 수는 없다.
  // - 5의 나머지가 즉 5의 일부(5전부가 될 수도 있다)가 5보다 크다는 건 말이 안 됨.
  // 5 % n의 결과는  0 <= x <= 5 이다.
  console.log(0 / 4); // 0
  console.log(4 / 0); // infinity : 0으로 어떤 수를 나눠봤자 계속 헛발질만하는거야...! => 무한!
  console.log(5 % 0); // NaN
  console.log(5 % 1); // 0
  console.log(5 % 2); // 1
  console.log(5 % 3); // 2
  console.log(5 % 4); // 1
  console.log(5 % 5); // 0
  console.log(5 % 6); // 5
  console.log(5 % 7); // 5
  console.log(5 % 8); // 5
}
