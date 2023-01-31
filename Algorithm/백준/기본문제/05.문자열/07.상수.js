"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split(" ");

const firstReverseNum = Number(
  input[0].split("").reverse().map(Number).join("")
);
const secondReverseNum = Number(
  input[1].split("").reverse().map(Number).join("")
);

firstReverseNum > secondReverseNum
  ? console.log(firstReverseNum)
  : console.log(secondReverseNum);
