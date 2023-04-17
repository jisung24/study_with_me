"use strict";

let str = "110010101001";

let strArr = str.split(""); // map굳이 해 줄 필요가 없어...!
let zero = 0;
let count = 0;

while (strArr.length !== 1 || strArr[0] !== "1") {
  // 아니라면...!
  count += 1; // 1번 시도됨
  zero += strArr.length - strArr.filter((e) => e === "1").length;

  strArr = strArr
    .filter((e) => e === "1")
    .length.toString(2)
    .split("");
}

console.log([count, zero]);
