// 이거 split으로 구현할 수 있어!  => 여러 개 일 때!
// 아니면 filter로....
// n = 100
"use strict";

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let arr = input[1].split(" ").map(Number);
let V = Number(input[2]);

// let filterArr = arr.filter((ele) => ele === V);
// console.log(filterArr.length);

let find = arr.indexOf(V);
let count = 1; // 이미 하나 찾고 시작하니까..!

while (true) {
  find = arr.indexOf(V, find + 1);

  if (find === -1) {
    break;
  } else {
    count++;
  }
}
console.log(count);
