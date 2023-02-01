"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let tc = Number(input[0]);
let numberArr = [];
for (let i = 1; i <= tc; i++) {
  let Ocnt = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    console.log(input[i]);
    if (input[i][j] === "O") {
      Ocnt += 1; // 1증가 시켜주고,
      sum += Ocnt;
    } else {
      Ocnt = 0;
    }
  }
  numberArr.push(sum);
}
console.log(numberArr.join("\n"));
