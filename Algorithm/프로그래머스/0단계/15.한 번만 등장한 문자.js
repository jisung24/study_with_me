"use strict";
let str = "abdc";
let arr = [];
function solution(s) {
  let countOfC;
  for (let c of s) {
    countOfC = s.length - s.split(c).join("").length;
    if (countOfC === 1) {
      arr.push(c);
    }
  }

  return arr.sort().join("");
}

console.log(solution(str));
