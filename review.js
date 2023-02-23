"use strict";
const arr = "1.222";
console.log(parseInt(arr));

console.log((1.33333).toFixed(2)); // 2번째 자리까지 나타내자..!
console.log((1.225).toFixed(2)); // 세 번째 자리에서 반올림한다..! 이렇게 해석하는 게 가장 정확해.

{
  // 큰 수 부터 작은 순으로 정렬한 새로운 정수를 return
  // 정수 => parseInt()
  // Number는 소수까지 다 포함한다 => 그냥 숫자!

  let n = 118372;
  let sort = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  console.log(parseInt(sort.join("")));
}
