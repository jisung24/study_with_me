"use strict";
// 대놓고 일단 filter를 사용해달라고 함.
// ~보다 작은 수 싹 다 filter로 걸러주자.
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let [arrLength, number] = input[0].split(" ").map(Number);
// 10 5
let arr = input[1].split(" ").map(Number);

let filterArr = arr.filter((ele) => ele < number);
console.log(filterArr.join(" "));
