"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let tc = Number(input[0]);

for (let i = 1; i < input.length; i++) {
  let [stuNums, ...scoreArr] = input[i].split(" ").map(Number);
  console.log(stuNums, scoreArr);
  //   // 평균점수
  //   let sumOfStuArr = scoreArr.reduce((acc, cur) => acc + cur);
  //   console.log(sumOfStuArr / stuNums);
}
