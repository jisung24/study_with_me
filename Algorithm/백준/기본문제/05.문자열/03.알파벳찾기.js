"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().trim();
// console.log(input, typeof input);
let result = "";
// str.indexOf("위치 찾고싶은 단어 or 문자열");
let findIndex = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let value of alphabet) {
    result += str.indexOf(value) + " ";
  }
  return result;
};

console.log(findIndex(input));
