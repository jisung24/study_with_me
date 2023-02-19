"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().trim();
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let answer = "";

for (let value of alphabet) {
  // input에서 찾는거야...!
  answer += input.indexOf(value) + " ";
}
console.log(answer);
