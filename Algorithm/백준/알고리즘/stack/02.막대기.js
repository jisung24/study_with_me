"use strict";
// 왜 스택인지 충분한 설명을 하고 3번째 풀이...!
// 문제
// 아래 그림처럼 높이만 다르고 (같은 높이의 막대기가 있을 수 있음) 모양이 같은 막대기를 일렬로 세운 후,
// 왼쪽부터 차례로 번호를 붙인다.
// 각 막대기의 높이는 그림에서 보인 것처럼 순서대로 6, 9, 7, 6, 4, 6 이다.
// 일렬로 세워진 막대기를 오른쪽에서 보면 보이는 막대기가 있고 보이지 않는 막대기가 있다.
// 즉, 지금 보이는 막대기보다 뒤에 있고 높이가 높은 것이 보이게 된다.
// 예를 들어, 그림과 같은 경우엔 3개(6번, 3번, 2번)의 막대기가 보인다.
let [tc, ...stack] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
// me
let me = stack.pop();
let count = 1;

console.log(stack);
for (let i = stack.length - 1; i >= 0; i--) {
  // 마지막 원소부터 시작한다...!
  if (stack[i] > me) {
    // 보이는 경우 : 나보다 큼
    me = stack[i];
    console.log(`me 바뀜~ >> ${me}`);
    console.log(`보이는 원소 >> ${stack[i]}`);
    stack.pop(); // 바뀐 횟수...!
    count++;
  } else {
    // 같거나 작다면 안 바꿔줘도 돼....
    stack.pop();
  }
}

console.log(`보이는 원소 개수 >> ${count}`);

// 즉,
// 가장 나중에 들어온 값이 먼저 처리돼야하는 경우
// push할 때는 그냥 해도되는데 pop할 때 조건이 붙어....
// 끝까지 다 봐야하는 경우는.. 일단 pop을 하고 조건을 붙여.
//
