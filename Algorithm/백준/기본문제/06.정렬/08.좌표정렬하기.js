"use strict";
// 좌표는 항상 정수이고,
// n은 10의 4제곱이라서 n^2으로 풀면 에러남...!

const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
// 2차원 배열인데 각 원소의 index 0번을 기준으로 정렬한다..!
input.shift();

// 2중 맵을 사용하여서 일단 모든 원소를 int형으로 바꿔준다...!
let numberArr = input.map((value) => {
  return value.split(" ").map(Number);
});

// 그리고 sort는 한 번만 사용하고,
// 최대한 console.log는 많이 사용하지 말자..!
// answer에다가 다 담아주면 돼.! => 근데 이러면 무용지물 아닌가..? 어차피 다 string형 될텐데...
let answer = "";
let sortedArr = numberArr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      // 다를 때 에는
      return a[0] - b[0];
    } else {
      // 33 34일 때..!
      return a[1] - b[1]; // 이런식으로 계속 정렬을 하는거구나... 신기하네
    }
  })
  .forEach((value) => {
    answer += value.join(" ") + "\n";
  });
// console.log(sortedArr.join);
console.log(answer);
