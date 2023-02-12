"use strict";
let emergency = [3, 76, 24];
let copy = [...emergency].sort((a, b) => b - a);
console.log(copy);
// copy에서 순위를 지금 매겨놓음!!!

// 이제 원본에서 3이 몇 등인지....!!!

let map = emergency.map((value) => copy.indexOf(value) + 1);
console.log(map);

// split
let str = "aAb1B2cC34oOp"
  .split("")
  .filter((ele) => ele === (Number.isNumber(ele) === true));
console.log(str);
// why this problem is solved by stack..
// why we use stack
