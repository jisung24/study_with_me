"use strict";
// 다 풀었지만 입력받는거에서 error..
// 정답은 맞게 나옴.
// 더미가 동적으로 늘어나는 걸 인지 못 하고, 계속 2더미 용으로만 풀고 있었음...

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 5권 2더미
let [totalBooks, dump] = input[0].split(" ").map(Number);
let answer;
for (let i = 1; i <= dump; i++) {
  let bookNumbers = input[i * 2].split(" ").map(Number);
  for (let j = 0; j < bookNumbers.length; j++) {
    // 그냥... 밑에 있는 것 보다 위에가 번호가 더 작으면 무조건 가능함.
    // ❗️역시.. 조건을 내가 잘 이해를 못 했어..❗️
    if (bookNumbers.pop() > bookNumbers.pop()) {
      answer = "no";
    } else {
      answer = "yes";
    }
  }
}
console.log(answer);
// 분명 돼야하는데,
// Cannot read properties of undefined (reading 'split')
// split 에러가 났다 => 값이 undefined인데 split해줘서 그럼...!!!
