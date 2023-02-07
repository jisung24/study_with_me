"use strict";
// 1. slice를 해서 a그룹 이외에 다른 그룹에서 a가 발견되면 안 돼!
// 자기 그룹 이외의 그룹에서 본인이 나오면 안 돼!!!

// 2. 아니면... indexOf(INDEX + 1)을 해서 값이 -1이거나 0이 아니라면 다른데에 있다는거니까 탈락.
// ❗️indexOf가 앞에꺼 제거됐다고 해서 0이 될 순 없음 => 내 생각 틀림.❗️
// let alpha = "aabbbccb".split("");
// let count = 0;
// for (let i = 0; i < alpha.length; i++) {
//   let value = alpha.indexOf(alpha[0]); // 첫 번째 글자를 찾는다.
//   // 당연히 있겠지?
//   value = alpha.indexOf(alpha[0], value + 1);
//   if (value === -1 || value !== 0) {
//     // 다른데에 있다는거잖아.....
//     console.log("out");
//   } else {
//     let newArr = alpha.slice(0);
//   }
// }

// 연속문자 queue을 이용함!!!
// 처음 문자를 queue에 집어넣어.
// 그 다음 문자도 넣고 비교.. 다르면 처음들어온 원소 shift()
// 또 비교 => 즉 다를 때 까지 비교한다.!!
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let cntOfTc = Number(input.shift()); // 4
let count = 0;

for (let i = 0; i < input.length; i++) {
  let strArr = input[i].split("");
  let queue = [strArr[0]];

  for (let j = 0; j < strArr.length; j++) {
    if (strArr[j] !== queue[queue.length - 1]) {
      queue.push(strArr[j]);
    }
  }
  let set = new Set(queue);
  if (set.size === queue.length) {
    count++;
  }
}
console.log(count);

// 생각한 tip
// 일단 큐에 쌓아놔.
// 그리고 공백을 없앴을 때 즉, set.size와 queue.length를 비교해!
// 다르면 공통된 게 있는거니까... 틀렸다고 하고, 맞으면 ok
