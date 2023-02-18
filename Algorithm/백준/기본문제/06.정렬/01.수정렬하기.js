const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let arr = [];

// O(N)
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}

// O(N log N)
let incSort = arr.sort((a, b) => a - b).join("\n");
console.log(incSort);

// 결국 합쳐도 N^2이 되지않음.
