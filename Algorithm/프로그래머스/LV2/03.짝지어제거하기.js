"use strict";
// 짝 짓는 문제가 나와서.. stack..?

let str = "baabaa";
let stack = [str[0]];

for (let i = 1; i < str.length; i++) {
  if (stack[stack.length - 1] !== str[i]) {
    stack.pop(); // 값을 뺴고,
    stack.push(str[i]);
  } else {
    // 같은 문자가 나온다...?
    let same = "";
    same += stack[stack.length - 1] + str[i]; // 가장 마지막 원소랑..
    console.log(same);
  }
}
