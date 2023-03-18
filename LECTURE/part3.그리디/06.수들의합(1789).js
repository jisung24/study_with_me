"use strict";
// 최대한 많은 수를 이용해서 합이 어떤 수가 되게끔..!
// 그럼 가장 작은 수를 계속 선택해서 N이 나올 때 까지
// 반복문 돌리면 돼..!

// 200
// 즉 최대한 많은 수를 이용해서 200을 만들어라
// 그 때 몇 개의 수가 쓰였는지로 이해하면 돼..!

// 56이 되게 해보자..!
// let N = 56;
//  직관적으로 생각해보자!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let i = 1; // 1부터
let cnt = 0;
while (true) {
  if (N - i > i) {
    N -= i;
    i += 1;
    cnt += 1;
  } else if (N - i === 0) {
    cnt += 1;
    break;
  } else {
    i += 1;
  }
}
console.log(cnt);
