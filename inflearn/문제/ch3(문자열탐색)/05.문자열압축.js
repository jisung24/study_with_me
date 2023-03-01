"use strict";
// 반복 횟수를 문자열 옆에 적어서 출력하는..!
// 스택에 그 영어가 처음 등장할 때 영어를 넣고,,
// 계속 같은 영어가 나오면 스택에 넣지말고 횟수만 증가시킨다.
// 다른 영어가 나오면 그 동안 셌던 count를 stack에 넣고 다른 영어도 넣고..
// 이걸 반복한다.
// 각 문자열이 몇 번 쓰였는 지...!

// ❗️ 근데 stack은 연속되는 문자열의 개수만 셀 수 있고,❗️
// 떨어져 있는 건 셀 수 없음.
// 왜냐면 stack은 top의 숫자와만 비교를 해야하는 자료구조이기 때문이다.
// top에서 더 들어가면 더 이상 앞에 1이 나왔는 지 알 수 없다.

// ❗️그래서 전체를 알고싶으면 hash를 쓰자..❗️

let str = "KKHSSSSSSSE";
let stack = [str[0]];
let answer = [];
let repeat = 1;
for (let i = 1; i < str.length; i++) {
  if (str[i] === stack[stack.length - 1]) {
    repeat += 1;
    console.log(str[i], repeat, "번 나옴");
  } else {
    // 다른 문자가 나왔다면...!
    stack.push(repeat); // 이전 횟수를 넣어주고...!
    stack.push(str[i]);
    repeat = 1;
  }
}
console.log(stack.join(""));

{
  let arr = [1, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1];
}
