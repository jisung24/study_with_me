"use strict";

/**
 * ❗️숫자를 입력받아 짝수면 Even 홀수면 Odd를 출력
 * @param {*} number : 입력받을 숫자
 * @returns 짝수 => "Even"  홀수 => "Odd";
 */
let solution = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};
