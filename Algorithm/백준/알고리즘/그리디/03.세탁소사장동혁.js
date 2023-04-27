"use strict";
// 손님이 받는 거스름돈의 개수를 최소화
// =>
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]); // 반복 횟수!
let money = [25, 10, 5, 1];

for (let i = 0; i < N; i++) {
  let restMoney = Number(input[i + 1]); // 거슬러줘야 할 돈!
  let answer = "";
  money.forEach((value) => {
    if (value <= restMoney) {
      // 작을 때 만 거슬러 줄 수 있어...!
      let count = 0;
      count += parseInt(restMoney / value);
      answer += `${count}`;
      restMoney %= value;
      console.log("남은 거스름돈! >> ", restMoney);
    } else {
      answer += "0";
    }
    console.log(answer);
  });
}
