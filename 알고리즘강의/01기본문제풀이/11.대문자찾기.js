"use strict";
// ele와 ele.toUpperCase()가 같은 거 고르면 돼!

let findCapital = (str) => {
  let count = 0; // 0개부터 시작
  for (let value of str) {
    value === value.toUpperCase() && count++;
  }

  return count;
};
console.log(findCapital("KoRaTimeGood"));
