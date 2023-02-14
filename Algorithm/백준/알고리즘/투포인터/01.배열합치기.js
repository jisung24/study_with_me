"use strict";
// 부분 배열의 합.. 에서 투포인터가 쓰이니까 아무래도 배열 합 문제가 나온거같음..
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let arrA = input[1].split(" ").map(Number);
let arrB = input[2].split(" ").map(Number);

let result = [...arrA, ...arrB].sort((a, b) => a - b);
console.log(result.join(" "));
