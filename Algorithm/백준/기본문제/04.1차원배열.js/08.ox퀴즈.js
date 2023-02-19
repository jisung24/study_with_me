"use strict";
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  let sum = 0;
  let total = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      sum = sum + 1;
      total += sum;
    } else {
      sum = 0;
    }
  }
  console.log(total);
}
