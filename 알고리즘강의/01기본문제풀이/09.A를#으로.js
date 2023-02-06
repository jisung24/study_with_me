"use strict";
const str = require("fs").readFileSync("dev/stdin").toString();
// console.log(str, typeof str);

/**
 *
 * @param {*} str : 입력받는 문자열
 * @returns : 문자열 중 A를 #로 바꿔서 만든 문자열!
 */
let changeStr = (str) => {
  let answer = "";
  for (let value of str) {
    value === "A" && (value = value.replace("A", "#"));
    answer += value;
  }

  return answer;
};

console.log(changeStr(str));

// 마찬가지로 문자열 일부 문자 바꾸는 문제 => replace로 바꿔줘야 함.!

// 문자열은 index로 str[3] = 'i'
// 이렇게 재할당이 불가능하다.
