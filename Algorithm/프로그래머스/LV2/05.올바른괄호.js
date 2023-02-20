"use strict";
// 1. 스택을 몰랐을 때!!!!
// - 일단 )가 먼저나오면 false이다.
// - (가 먼저 나오긴 하는데.. )가 (의 개수를 넘어서면 false
let s = "()()())";

let solution = (s) => {
  let open = 0;
  let close = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[0] === ")") {
      //   console.log(`맨 앞에 )가 나옴..`);
      return false;
    } else {
      // 맨 앞에 (가 나왔어!!!
      if (s[i] === "(") {
        open++;
      } else {
        close++;
        if (close > open) {
          return false;
        }
      }
    }
  }
  //   console.log(`open >> ${open}, close >> ${close}`);
  return true;
};
console.log(solution(s));
