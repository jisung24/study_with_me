"use strict";
const arr = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let restMap = arr.map((ele) => ele % 42);

// 각각의 수가 몇 개가 있는지...!
// sort 생각했지만.. 그냥 set으로 같은 자원들 다 제거하면 서로 다른 값의 개수만 나옴...!
// set을 배열로 만들고 length를 구하면 끝이야!!!!!!
let set = new Set(restMap);
console.log(set.size);
