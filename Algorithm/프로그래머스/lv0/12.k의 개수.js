"use strict";
// i부터 j까지 k라는 수가 몇 번 나오는지...!!
// 반복문 줄이기...ㅜㅜ 이거 힘들다...

// 1에서 13까지 1의 개수.
// let k = 1;
// let count = 0;
// for (let i = 1; i <= 13; i++) {
//   let splitArr = i
//     .toString()
//     .split("")
//     .map(Number)
//     .filter((e) => e === k);

//   count += splitArr.length;
// }
// console.log(count);

function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }
  return a.length - a.split(k).join("").length;
}

console.log(solution(1, 13, 1));
