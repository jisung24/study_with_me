"use strict";
let days = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
let a = 5;
let b = 24;
let daysCnt = 0;
for (let i = 1; i <= a; i++) {
  if (i in days) {
    if (i < a) {
      daysCnt += days[i];
    } else if (i === a) {
      daysCnt += 24;
    }
  }
}
// 포함해서 하는 시간..!
console.log(daysCnt - 1);
