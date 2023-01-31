"use strict";
let wordCnt = (str) => {
  let count = str.split(" ");

  return count.length;
};

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ");
console.log(input[0] === "" ? 0 : input.length);
