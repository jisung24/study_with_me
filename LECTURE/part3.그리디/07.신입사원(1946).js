"use strict";
// 적어도 하나가 떨어지지 않는다?
// 둘 다 높아야 돼!

// 지원자 10만! N^2은 안 돼...!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
console.log(N);

let a = Number(input[1]); // 5
let b = Number(input[a + 2]); // 7
let aArr = [];
let bArr = [];
for (let i = 0; i < a; i++) {
  aArr.push(input[i + 2]);
}

for (let i = 0; i < b; i++) {
  bArr.push(input[i + a + 3]);
}
console.log(aArr);
console.log(bArr);
