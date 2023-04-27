"use strict";

const { count } = require("console");

// 각 버튼마다 몇 번 눌렀는지... 검사하기 위해선
// 각 버튼의 종류로 반복문 돌려주는게 필수!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let time = Number(input[0]);
let buttons = [300, 60, 10];

let countTimeButtons = (time) => {
  // 몇 자리 시간이 들어오는 지 알 수 없다. => 그래서 배열로 만들어줘야 한다.
  let check = time.toString().split("");
  if (check[check.length - 1] !== "0") return -1;
  let answer = "";
  let count = 0;
  buttons.forEach((value) => {
    // 누르는 횟수
    // 남은 시간
    count += parseInt(time / value);
    time %= value; // 남은 시간을 빼줘야 돼!
    answer += `${count} `;
    count = 0; // 다음 버튼 0번째부터 눌러야해서!
  });
  return answer.trim();
};

// console.log(countTimeButtons(100));
console.log(countTimeButtons(189));
