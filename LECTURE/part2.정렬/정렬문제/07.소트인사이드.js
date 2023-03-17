"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let arr = input[0].split("").map(Number);

/**
 * ❗️배열을 내림차순으로 만들어줌❗️
 * @param {*} arr : 내림차순 할 배열
 * @returns : 내림차순 결과
 */
let decFunc = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  });
};

decFunc(arr); // 내림차순 정렬!

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += String(arr[i]); // String으로 type변환! (어제 배움)
}
console.log(answer);
