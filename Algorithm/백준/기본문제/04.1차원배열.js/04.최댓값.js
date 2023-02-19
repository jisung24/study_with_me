"use strict";
const arr = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

console.log(Math.max(...arr), arr.indexOf(Math.max(...arr)) + 1);
