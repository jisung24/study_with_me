"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let arr = [];
let m = Number(input[0].split(" ")[1]);
let answer = 0;
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}
// [ 3, 5, 2, 1 ]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = 0; j <= arr.length; j++) {
    if (arr[i] + arr[j] <= 6) {
      answer++;
    }
  }
}
console.log(answer);
