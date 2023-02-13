"use strict";
// 연속적이니까... 반복문 for문 이용하면 됨.

// 1부터 15
// 2부터 15
// ...이렇게 쭉
//15부터 15
// 더해서 15가 되는 i return
let n = 15;

let solution = (n) => {
  let i = 1;
  //   let sum = 0;

  for (let i = 1; i <= n; i++) {
    console.log(`${i}부터 시작!`);
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      console.log(j);
      if (sum === 15) {
        console.log(`${i}부터 시작하면 돼!!`);
        break;
      }
    }
  }
};

console.log(solution(15));
