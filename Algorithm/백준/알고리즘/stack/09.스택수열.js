"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let length = input.shift();
console.log(input); // [ 4, 3, 6, 8, 7, 5, 2, 1 ]

for (let i = 0; i < input.length; i++) {
  // 4가 1 2 3 4와 같을 때 까지..!
  // 즉 1 2 3 4를 돌고 i는 고정이 돼야 하니까..
  // for문 i를 input[0]으로 고정을 해두고 그 안에서 1 2 3 4를 돌리는 게 나아보임.
  // while(input[i] === )
  // 어떤 값을 찾는다? => i로 고정시켜준다..!
  let j = 0;
  while (input[i] !== j) {
    j++;
    console.log(input[i], j);
  }
}
