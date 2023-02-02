"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let wordCount = Number(input.shift()); // 3개가 들어옴.
let trueCount = 0;
let wrong = 0;
// console.log(input);

for (let i = 0; i < input.length; i++) {
  let typeOfWord = [];
  if (input[i].length === 1) {
    trueCount++; // 1글자면 무조건 true!!!
  } else {
    // 2글자 이상이면, 글자 돌려야지 뭐.
    for (let j = 0; j < input[i].length; j++) {
      if (j === 0) {
        typeOfWord.push(input[i][j]);
      } else {
        // 0이 아니면 비교한다.
        // 1 2 3 4 등등 글자가 여기로 온다.
        if (input[i][j] === input[i][j - 1]) {
          continue; // 그냥 지나간다.
        } else {
          // 이전값과 값이 다른경우
          if (typeOfWord.join("").indexOf(input[i][j]) !== -1) {
            // 근데 이미 값이 나왔을 경우!!!!
            wrong++;
            // console.log(`아닌 단어 >> ${input[i]}`);
            break;
          } else {
            // 값이 안 나왔어, 처음이야 => continue;
            continue; // 맞은건 그냥 넘어간다.
          }
        }
      }
    }
  }
}
// console.log(`아닌 거 >> ${wrong}`);
console.log(wordCount - wrong);

// 자꾸 틀렸다고 나오는데... 왜지..
// 틀린 이유 내일 다시 한 번 풀어보자.
