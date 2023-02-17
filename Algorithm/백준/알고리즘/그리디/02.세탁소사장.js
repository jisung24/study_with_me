"use strict";
const [countOfTimes, ...restMoneyArr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let typeOfMoney = [25, 10, 5, 1]; // 거슬러 줄 수 없는 돈은 없다!
let answerArr = [];
let answer = "";
for (let i = 0; i < restMoneyArr.length; i++) {
  let count = 0;
  //   console.log(`${i + 1} 번째 거스름돈 >> ${restMoneyArr[i]}`);
  for (let money of typeOfMoney) {
    if (money > restMoneyArr[i]) {
      // 배꼽이 배보다 크면 continue...
      answer += 0 + " ";
      continue;
    } else {
      count = Math.floor(restMoneyArr[i] / money);
      answer += count + " ";
      restMoneyArr[i] -= count * money;
      //   console.log(`남은 돈 >> ${restMoneyArr[i]}`);
    }
  }
  answer += "\n";
}
console.log(answer);
