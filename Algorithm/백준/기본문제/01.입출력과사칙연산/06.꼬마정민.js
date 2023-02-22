let [num1, num2, num3] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(num1 + num2 + num3);
