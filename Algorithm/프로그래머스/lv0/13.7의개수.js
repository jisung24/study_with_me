"use strict";

let array = [7, 77, 17];

function solution(array) {
  let str = array.join("").length;
  let str7 = array.join("").split("7").join("").length;
  return str - str7;
}
console.log(solution(array));
