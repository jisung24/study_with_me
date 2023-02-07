const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift(); // 제거

input.sort((a, b) => a - b); // 나머지 정렬!

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
