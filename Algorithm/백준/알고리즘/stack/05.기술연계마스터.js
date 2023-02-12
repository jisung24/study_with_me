"use strict";
// 사전스킬을 써야 사후스킬을 쓸 수 있음..!
// 연계 기술 : 사전 기술 + 본 기술

// 본 기술을 사용하려면 사전 기술과 반드시 짝을 지어야한다...!!!
// 즉, 짝 짓는 문제❗️ => stack!

// 사전기술을 쓰고 반드시 본 기술을 사용할 필요는 없지만,
// 본 기술을 사용하려면 반드시 사전기술이 필요하다.

// 연계 기술은 반드시 사전  +  본 기술 모두 정상적으로 이루어져야해!!!

// 1 - 9 : 얼마든지 사용해도 돼!!!
// L -> R (L은 사용해도 되지만 R은 L을 먼저 사용해야한다..!)
// S -> K
let [count, ...skills] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let skillArr = skills.join("").split("");

// [ 'S', '1', '2', 'K', '2' ]
// 만약 사전기술 없이 본 기술이 바로나왔다면 이후의 기술들이 사용될 수 없음...
// count그냥 break해주자..!!!!!

// 즉, 사전 기술은 신경 안 써줘 돼!!

// 하지만 본 기술이 나왔을 경우에만 신경을 써줘야 돼!!!

// 만약 사전 기술이 없이 본 기술이 나왔다면 바로 out...!!!
// stack에 사전기술을 쌓아두자...!!!

let stack = [];
let usingSkillsCnt = 0; // 스킬 사용한 횟수..!
let sCnt = 0; // s가 나온 횟수!
let lCnt = 0; // L이 나온 횟수!
let cnt = 0;
let otherCnt = 0;
for (let value of skillArr) {
  // 1. 숫자는 그냥 count올림
  // 2. 사후 기숭이 등장했을 경우, 사전기술이 있는 지 확인..
  //    있다면 pop을 한다.
  //    없다면 바로 break때려서 반복문 빠져나온다.
  // 3. 사전 기술은 그냥 사용해도 되는데, count는 안 됨.
  // 그냥 stack에 push용임.
  // ❗️사전 기술이 쓰이고 다른 사전 기술이 올 수 있어❗️
  // SL KR 이렇게..!!
  if (value >= "1" && value <= "9") cnt++;
  else {
    // 다른 영어!!
    if (value === "S") {
      sCnt++; // s를 늘려준다. cnt는 안 늘려줘.
    } else if (value === "L") {
      lCnt++;
    } else if (value === "K") {
      if (sCnt > 0) {
        sCnt--;
        cnt++;
      } else {
        break;
      }
    } else if (value === "R") {
      if (lCnt > 0) {
        lCnt--;
        cnt++;
      } else {
        break;
      }
    }
  }
}
console.log(cnt);
// 사전기술이 2번 쓰일 수 있잖아....
// 그럼 stack전체를 확인해봐야 해...!
