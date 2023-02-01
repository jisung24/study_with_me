"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let tc = Number(input[0]);
let arr = [];
for (let i = 1; i <= tc; i++) {
  let [stuNums, ...scoreArr] = input[i].split(" ").map(Number);
  let avgOfStuArr = scoreArr.reduce((acc, cur) => acc + cur) / stuNums;
  let filterStuAvg = scoreArr.filter((ele) => {
    return ele > avgOfStuArr;
  });

  console.log(((filterStuAvg.length / stuNums) * 100).toFixed(3) + "%");
}

// console.log(
//   arr
//     .map((value) => {
//       return Number(value) + "%";
//     })
//     .join("\n")
// );
