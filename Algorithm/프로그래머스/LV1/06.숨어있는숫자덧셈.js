"use strict";
// 원하는 글자만 찾고싶을 때!!!!!!!
// 나머지 글자를 전부.... 공백으로 바꿔주고 split으로 없애준다!!!!!!!!
let str = "aAb1B2cC34oOp";
// console.log(str.replace("a", "300"));
let replaceArr = "";

for (let value of str) {
  if (isNaN(value) === true) {
    // 영어이면...!!
    value = value.replace(value, " ");
    replaceArr += value;
  } else {
    replaceArr += value;
  }
}
console.log(
  replaceArr
    .split(" ")
    .map(Number)
    .reduce((acc, cur) => acc + cur)
);
