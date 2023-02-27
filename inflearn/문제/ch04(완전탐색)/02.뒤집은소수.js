"use strict";
let numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100];
let reversed = [];

for (let value of numbers) {
  value = value
    .toString()
    .split("")
    .reverse()
    .map((value) => parseInt(value))
    .join("");
  reversed.push(parseInt(value));
}
let num = [];
for (let i = 0; i < reversed.length; i++) {
  let count = 0;
  for (let j = 1; j <= reversed[i]; j++) {
    if (reversed[i] % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    num.push(reversed[i]);
  }
}
console.log(num);
