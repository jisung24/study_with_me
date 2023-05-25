"use strict";
// 1. 데이터를 입력받고, 정확한 형식으로 출력한다.
// 1 2 (입력)
// 1 3 5 7 9 (출력) 이런식으로

// N명의 학생이 주어졌을 때 내림차순 한 결과를 출력해라!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]); // N명!
let students = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1;
    // 같을 땐 그냥 아무것도 적용x
  });
console.log(students);
