"use strict";
// 여집합..을 생각을 해보자.
// 전체에서 과제를 낸 사람을 빼면..?

// 1번부터 30번까지가 있는데, 이 중 없는 번호는 이제 과제를 안 낸 번호...!
// 즉 없는 번호가 몇 개인지 구해라!

let arr = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

// 1. 1번부터 30번까지 배열을 만들어서 저기서 -1이 나오는 값의 개수...!

// let students = Array.from({ length: 30 }, (_, i) => i + 1);
let stuNums = 30;
// 아니면 stuNums = 30
// 1부터 stuNums를 계속 반복문...!

for (let i = 1; i <= stuNums; i++) {
  if (arr.indexOf(i) === -1) {
    // 만약 없는 학생은
    console.log(i); // 출력을 해주자..!
  }
}
