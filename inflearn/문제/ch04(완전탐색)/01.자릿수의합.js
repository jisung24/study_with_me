"use strict";
// 해시로 풀어보자..!
// 각 숫자 : 각 자릿수의 합
let arr = [128, 460, 603, 40, 521, 137, 123];
let numbers = {};

for (let value of arr) {
  numbers[value] = value
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}

let values = Object.values(numbers).sort((a, b) => b - a);
let setValues = Array.from(new Set(values));

console.log(numbers);
// key들을 찾아보자...!
let findKeys = Object.keys(numbers).filter(
  (ele) => numbers[ele] === setValues[0]
);
let answer = findKeys.map(Number).sort((a, b) => b - a);
console.log(answer[0]);
