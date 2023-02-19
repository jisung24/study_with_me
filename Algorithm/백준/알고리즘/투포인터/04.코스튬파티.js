"use strict";
const [tc, ...input] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n");

let [cows, size] = tc.split(" ").map(Number);
let left = 0;
let right = input.length - 1;
let cowsArr = input.map(Number).sort((a, b) => a - b);
let min = cowsArr[0] + cowsArr[1];
let count = 0;

while (true) {
  if (cowsArr[left] + cowsArr[right] > size) {
    right--; // right를 작게 한다...!
  } else if (cowsArr[left] + cowsArr[right] === size) {
    // 이제 6이하인 값을 찾아야지...! 어차피 6이상인 값은 필요없어.
    console.log(`[${cowsArr[left]}, ${cowsArr[right]}]`);
    right--;
    count++;
  } else if (cowsArr[left] + cowsArr[right] < size) {
    if (cowsArr[left] + cowsArr[right] > min) {
      //   console.log(`[${cowsArr[left]}, ${cowsArr[right]}]는 min보다 커요...!`);
      count++;
      right--;
    } else if (min === cowsArr[left] + cowsArr[right]) {
      console
        .log
        // `[${cowsArr[left]}, ${cowsArr[right]}]는 min이네요..! 동시 증가!`
        ();
      count++;
      left++;
      right++;
    }
  }

  if (left === right) {
    break;
  }
}
console.log(count);
