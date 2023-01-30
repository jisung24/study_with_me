"use strict";
const input = require("fs").readFileSync("dev/stdin").toString();

/**
 * ❗️문자를 아스키코드 상에서 숫자로 바꿔주는 함수❗️
 * @param {*} char : 입력받는 문자
 * @returns : 숫자로 return해서 결과출력
 */
let charToNum = (char) => {
  return char.charCodeAt();
};
console.log(charToNum(input));

// 문자로 바꿔주는 건 String.fromCharCode()
console.log(String.fromCharCode(78)); // N
