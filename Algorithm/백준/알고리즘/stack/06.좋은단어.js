"use strict";
// AA  BB끼리 짝 지어서, 아치형 곡선을 그린다..
// 즉, 교차하지 않는 문자열을 구하자..
// 교차하지 않는다는건.. 뭘 의미할까..?

// 첫 번째 문자가 뭐가 오든..
// 그거랑 같은 글자는 반드시 그 문자가 있어야 가능하다.

// AAA도 중간 A에서 교차점이 2개가 생김 안 됨.
// 즉 A를 pop히려 할 때 A가 있어야 돼...

// 근데 ABAB는 안 돼...

// 교차하려면 무슨 조건이 돼야할까....?
// ABAB => 각 글자 양 옆에 다른글자면 안 돼..

// ABBABB => 하지만 응 가능해...

// 역시 짝 짓는 문제야!!!
// stack
// 즉 교점이 생기지 않게끔 짝을 지어서 값을 구하자.

// 같은 알파벳이 2개씩,
// 서로 떨어져 있는 알파벳 사이에 있는 글자가 짝지여저 있어야 한다.
// A를 -하려할때 B의 count가 1개 이상이면 안 돼...!!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let tc = Number(input[0]);
let count = 0;
let aCnt = 0;
let bCnt = 0;

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
  let stack = [];
  stack.push(input[i][0]);
  stack[stack.length - 1] === "A" ? (aCnt += 1) : (bCnt += 1);
  for (let j = 1; j < input.length; j++) {
    // 그 다음 문자들...!!
    if (input[i][j] === "A") {
      if (aCnt > 0 && bCnt === 0) {
        aCnt--;
        count++;
      } else {
        break;
      }
    } else {
      // b일경우...
      if (bCnt > 0 && aCnt === 0) {
        bCnt--;
        count++;
      } else {
        break;
      }
    }
  }
}
console.log(count);
