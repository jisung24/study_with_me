"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("");

let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};
// for(let i =0; i < input.length; i++) {
//     // phone에서 input값을 찾는거야...!

// }

// W를 찾아보자...!
let sum = 0;
for (let value of input) {
  for (let keys in phone) {
    if (phone[keys].indexOf(value) !== -1) {
      sum += Number(keys) + 1;
    }
  }
}

console.log(sum);
