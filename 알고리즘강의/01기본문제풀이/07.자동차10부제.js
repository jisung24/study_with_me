"use strict";
// 날짜의 1의자리와 자동차 번호의 1의 자리가 일치하면 운행 못 함.

// 10번 자동차는 10일 20일 30일 운행 못 함.
// 위반하는 자동차의 개수. => 즉 일의자리와 배열의 일의자리가 같은 차가 있어서는 안 돼!

let [date, cars] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");
date = Number(date);
console.log(date);

let check = (arr) => {
  let illigal = arr.filter((e) => e % 10 === date);

  return illigal;
};
console.log(check(cars.split(" ").map(Number)));
