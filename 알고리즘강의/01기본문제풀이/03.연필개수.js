"use strict";
let input = Number(require("fs").readFileSync("dev/stdin").toString());

/**
 * 연필의 개수를 입력받아 다스 수를 구하는 문제
 * @param {*} countOfPencil : 필요한 연필의 개수
 * @returns : 다스 수
 */
let solution = (countOfPencil) => {
  let das = Math.floor(countOfPencil / 12) + 1;
  return das;
};
console.log(solution(25)); // 3
console.log(solution(178)); // 15

// Math.floor(소수)
// 소수를 내림..

// 나누기 => Math.floor 생각해보자!
