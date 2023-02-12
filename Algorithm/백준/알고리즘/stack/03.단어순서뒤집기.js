"use strict";
// 단어 순서 뒤집기..
// stack에 단어들을 하나하나씩 넣고 pop한 값들을 배열에 그대로 쌓아주면 끝!
let [countOfSec, ...sentence] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let popArr = [];
for (let i = 0; i < countOfSec; i++) {
  console.log();
}
