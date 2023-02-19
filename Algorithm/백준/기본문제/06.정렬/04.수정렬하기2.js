const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
input.shift(); // O(N);
let sort = input.sort((a, b) => a - b); // O(Nlogn)

console.log(sort.join("\n"));
// for문 보다 join을 사용하는게 훨씬 성능면에서 우월하다.
// 앞으로 join을 사용해야겠다...
