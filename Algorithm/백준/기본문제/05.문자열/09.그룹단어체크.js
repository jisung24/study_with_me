"use strict";
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let count = 0;
let answer = 0;
for (let i = 1; i < input.length; i++) {
  //   console.log(input[i]);
  let arr = [input[i][0]];
  for (let j = 1; j < input[i].length; j++) {
    // 같은 경우! (무조건 Push)
    if (arr[arr.length - 1] === input[i][j]) {
      arr.push(input[i][j]);
    } else if (
      arr[arr.length - 1] !== input[i][j] &&
      arr.indexOf(input[i][j]) === -1
    ) {
      // 다른데 안에 없어...!
      arr.push(input[i][j]);
    }
    // 다른데... 안에 있어...! 안 돼!
    else if (
      arr[arr.length - 1] !== input[i][j] &&
      arr.indexOf(input[i][j]) !== -1
    ) {
      break;
    }
  }

  if (input[i].length === arr.length) {
    count++;
  }
  answer = count;
}
console.log(answer);
