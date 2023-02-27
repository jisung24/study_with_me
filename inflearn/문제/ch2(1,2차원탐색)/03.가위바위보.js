"use strict";

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let matchCount = parseInt(input[0]);
let A = input[1].split(" ").map(Number);
let B = input[2].split(" ").map(Number);
let answer = [];
// 5판만큼 반복한다...!
for (let i = 0; i < matchCount; i++) {
  if (A[i] === 1) {
    // A가 가위
    if (B[i] === 1) {
      answer.push("D");
    } else if (B[i] === 2) {
      answer.push("B");
    } else {
      answer.push("A");
    }
  } else if (A[i] === 2) {
    if (B[i] === 1) {
      answer.push("A");
    } else if (B[i] === 2) {
      answer.push("D");
    } else {
      answer.push("B");
    }
  } else {
    // A가 보를 냈을 때!
    if (B[i] === 1) {
      answer.push("B");
    } else if (B[i] === 2) {
      answer.push("A");
    } else {
      answer.push("D");
    }
  }
}

console.log(answer.join(" "));
