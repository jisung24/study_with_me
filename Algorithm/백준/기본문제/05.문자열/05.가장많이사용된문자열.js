"use strict";
// uppercase때린다음 계산하자!

let countArr = [];
let input = "Mississipi";
for (let i = 0; i < input.length; i++) {
  let findIndex = input.indexOf(input[i]); // 0부터 시작.
  let count = 0;
  while (findIndex !== -1) {
    count++;
    findIndex = input.indexOf(input[i], findIndex + 1);
  }
  console.log(`${input[i]} >> ${count}번`);
}
