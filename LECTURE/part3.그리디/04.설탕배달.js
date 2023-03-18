"use strict";
// 3kg 5kg이 있으면
// 정확하게.... 저 2개만을 이용해서... 해야하는데,
// 최대한 5kg을 많이 이용해야 한다...!

// 그럼... 5kg으로 나눌 수 있을 때 까지 3kg을 뺀다
// 만약 5kg으로 나눌 수 있다면 나누면 됨(5kg만 사용했을 경우..)

// 근데 그게 아닐경우...!
// 그 수를 5kg으로 나눌 수 있을 때 까지 3kg을 빼고 3++해줌.
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);

// 만약 5로 나눠진다면 그냥 나누기 하면 값 나옴.

// 그게 아니라면..
// 3을 계속 빼... => 언제까지? 5로 나눠질 때 까지..
// 그리고 0이 될 때 까지...!

// 0 / 5 === 0 이니까 그냥 0도 0으로 나눔...!
// flag : 과연 3과 5로 나타낼 수 있는 지 없는 지 검사!!
let answer = 0;
let flag = false;
while (N >= 0) {
  // 0보다 크거나 같을 때 까지 반복....!
  // 음수가 되면 빠져나간다...!
  if (N % 5 === 0 || N === 0) {
    answer += N / 5; // 5로 나눈 값을 더해라...!
    console.log(answer);
    flag = true; // 된다!
    break;
  }
  // 저게 아니라면...
  N -= 3;
  answer += 1;
}

if (!flag) {
  console.log(-1);
}
