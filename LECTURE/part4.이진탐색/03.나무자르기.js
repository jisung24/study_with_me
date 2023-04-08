"use strict";
// 구해야 할 것 : 내가 잘라야 할 높이의 최댓값
// 무조건 1m는 들고가야 한다.
// 그래서 0m부터 최댓값 - 1까지를 갖는다!

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0].split(" ")[0]); // 나무의 수!
let min = Number(input[0].split(" ")[1]); // 내가 가져가야 할 최소한의 나무 길이
let trees = input[1].split(" ").map(Number);
// 1 <= min <= 매우 큼! => 1m는 반드시 들고 가야한다.
// 그럼 나무를 잘랐을 때 1m는 나와야되는데, 최댓값을 설정하면 0m니까
// 최댓값 - 1을 범위로 둔다.

let start = 0;
let end = Math.max(...trees) - 1; // 최댓값 - 1

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2); // 중간 높이를 지정해줘!
  // 높이를 설정 후 각 나무에서 빼준다음에 값을 target이랑 검사해야 돼!

  let total = 0; // 나무를 중간 높이로 잘랐을 때의 합!
  for (let value of trees) {
    if (value > mid) {
      // 나무가 mid보다 더 큰 경우에만 잘리는 게 있어서
      // total에 더해주면 돼!
      total += value - mid;
    }
  }

  // 이제 양이 나옴!
  // 더 많이 잘라야 돼!! => 높이를 더 낮추자...!
  if (total < min) end = mid - 1;
  else {
    // 최소 7m보다 같거나 큰 경우, 7m만을 가져가게끔 해줘야 돼!
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
