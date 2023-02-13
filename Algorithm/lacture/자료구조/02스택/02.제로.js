"use stirct";
const [tc, ...arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let stack = [];

for (let value of arr) {
  if (value !== 0) {
    stack.push(value);
  } else {
    // 0이라면....
    stack.pop();
  }
}

let sum = 0;
for (let i = 0; i < stack.length; i++) {
  sum += stack[i];
}
console.log(sum);
