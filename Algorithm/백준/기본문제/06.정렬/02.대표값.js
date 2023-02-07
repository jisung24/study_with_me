"use strict";
const values = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let representativeValue = (arrList) => {
  let copyArr = [...arrList];
  let avg = parseInt(arrList.reduce((acc, cur) => acc + cur) / arrList.length);
  let centerValues = copyArr.sort((a, b) => a - b)[
    Math.floor(copyArr.length / 2)
  ];

  return avg + "\n" + centerValues;
};
console.log(representativeValue(values));
