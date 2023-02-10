"use strict";
const [nums, ...words] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < words.length; i++) {
  let arr = words[i].split(" ").reverse();
  let result = "";
  result += arr.join(" ");
  console.log(`Case #${i + 1}: ${result}`);
}
