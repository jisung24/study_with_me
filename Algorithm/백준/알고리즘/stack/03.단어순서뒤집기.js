"use strict";
// 단어 순서 뒤집기..
// stack에 단어들을 하나하나씩 넣고 pop한 값들을 배열에 그대로 쌓아주면 끝!
// 결국 스택의 마지막 원소만 계속 신경써주면 된다..!
// 그 전 요소는 신경 안 써줘도 돼!
let [countOfSec, ...sentence] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answerArr = [];

for (let i = 0; i < Number(countOfSec); i++) {
  let senArr = sentence[i].split(" ");
  let arr = [];

  while (true) {
    arr.push(senArr.pop()); // stack의 핵심!
    // 가장 마지막 부터 계속 처리해주고 push해주면 돼!
    // 어차피 자바스크립트는 stack자료구조가 있기 때문에,
    // 직접 구현은 안 해줘도 돼!
    if (senArr.length === 0) {
      break;
    }
  }
  answerArr.push(arr);
}

for (let i = 0; i < answerArr.length; i++) {
  console.log(`Case #${i + 1}: ${answerArr[i].join(" ")}`);
}
