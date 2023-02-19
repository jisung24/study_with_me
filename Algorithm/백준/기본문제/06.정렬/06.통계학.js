"use strict";
const arr = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let arrLength = arr.shift(); // o(n)

// 산술 평균 : n개의 수의 평균값  => 첫 째 자리에서 반올림.
// 중앙 값
// 최빈 값 : 가장 많이 나온 값 => 여러개라면 최빈 값 중 두 번째로 작은 값
// 범위 출력
let sortedArr = arr.sort((a, b) => a - b);

// 평균 ( 첫 째 자리에서 반 올림 )
let avg = (
  sortedArr.reduce((acc, cur) => acc + cur) / sortedArr.length
).toFixed(0); // 첫 째 자리에서 반올림.
console.log(avg);
// 중앙 값
let centerValue = sortedArr[Math.floor(sortedArr.length / 2)];
console.log(centerValue);

// 최빈 값... !
// N개의 수 중 가장 많이 나타나는 값..!
// 최빈 값이 여러 개 나타난다면 2번째로 작은 값을 출력한다.
let map = new Map(); // 숫자 : 빈도수...!

for (let i = 0; i < sortedArr.length; i++) {
  if (!map.has(sortedArr[i])) {
    // key에 숫자를 추가해준다!!!
    map.set(sortedArr[i], 1); // 숫자의 개수..!
  } else {
    // 있다면...!!!
    let value = map.get(sortedArr[i]);
    console.log(value);
  }
}
console.log(map);
