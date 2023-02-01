"use strict";
// 어차피 1 - 2자리로 고정이야! / %로 승부보자!
let input = Number(require("fs").readFileSync("dev/stdin").toString());
console.log(input, typeof input);

let count = 0; // 몇 번 반복되는 지!

let startNumber = input;
let sumArr = []; // 55가 들어감!
while (true) {
  sumArr.push(startNumber);
  count++;
  console.log(count, "번째 시도!");
  console.log(`처음 수 >> ${startNumber}`);
  let ten = Math.floor(startNumber / 10);
  let one = Math.floor(startNumber % 10);
  console.log("십의 자리 >> ", ten);
  console.log("일의 자리 ", one);
  startNumber = one * 10 + Math.floor((one + ten) % 10);
  if (startNumber === sumArr[0]) {
    break;
  }
}
console.log(count);
