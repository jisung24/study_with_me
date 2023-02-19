"use strict";
// repeat함수 사용하면 될 듯..!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
for (let i = 1; i < input.length; i++) {
  let answer = "";
  let [number, str] = input[i].split(" ");
  for (let value of str) {
    value = value.repeat(Number(number));
    answer += value;
  }
  console.log(answer);
}
