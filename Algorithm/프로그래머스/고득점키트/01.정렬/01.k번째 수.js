"use strict";
// slice i -1부터 j까지..해서 return
let array = [1, 5, 2, 6, 3, 7, 4];
let command = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
let answer = [];
for (let value of command) {
  // console.log(value); 2 5 3
  // 어차피 slice는 원본 훼손을 하지 않아서 마음대로 써도 된다.!!
  let [first, end, approach] = value;
  let slicedArr = array.slice(first - 1, end).sort((a, b) => a - b);
  answer.push(slicedArr[approach - 1]);
}

console.log(answer);
