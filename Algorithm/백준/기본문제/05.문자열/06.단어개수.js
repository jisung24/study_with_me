"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim() // 좌우 공백을 다 제거하고...!
  .split(" ");

console.log(input[0] === "" ? 0 : input.length);
// 문자열을 안 받았을 때 1로 된다...!
