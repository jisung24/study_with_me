"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let [m, w] = input[0].split(" ").map(Number); // 3 3

// 상근이가 갖고있는 cd번호...!
let mCD = {};
let wCD = {};
for (let i = 1; i <= m; i++) {
  mCD[Number(input[i])] = true;
}
for (let i = m + 1; i < input.length - 1; i++) {
  wCD[Number(input[i])] = true;
}
let count = 0;

for (let keys in mCD) {
  // 여기서 keys가
  if (keys in wCD) {
    console.log(`겹치는 key >> ${keys}`);
    count++;
  }
}

console.log(count);
