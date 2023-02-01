"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const money = Number(input.shift());
const tc = Number(input.shift());
let sum = 0;

for (let i = 0; i < tc; i++) {
  let [itemPrice, count] = input[i].split(" ").map(Number);
  sum += itemPrice * count;
}

sum === money ? console.log("Yes") : console.log("No");
