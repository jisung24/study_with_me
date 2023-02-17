"use strict";
let [shopCnt, arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");

let shops = arr.split(" ").map(Number);
let canDrink = 0;
let count = 0;
for (let value of shops) {
  if (value === 0 && value === canDrink) {
    count++;
    canDrink = 1;
  }

  if (value === 1 && value === canDrink) {
    count++;
    // console.log(`초코우유 가게 나왔다!! 가능`);
    canDrink = 2; // 다음은 딸기가게.
  }

  if (value === 2 && value === canDrink) {
    // 왜 value === canDrink를 해주냐면
    // 2다음은 0이 나와야 하기 때문이다...!!
    count++;
    // console.log(`딸기우유 가게 나왔다!! 가능`);
    canDrink = 0; // 다음은 딸기가게.
  }
}
console.log(count);
