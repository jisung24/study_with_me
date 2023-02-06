"use strict";
// 음..
// 9명중 7명을 뽑아서 합이 100이 되게 만들자...

// 합이 100이 되게 어떻게 만들지...?
// 아 딱 100 그럼 전체를 더해서 그 만큼 뺴연 됨..
let nine = [20, 7, 23, 19, 10, 15, 25, 8, 13];
let sumOfNine = nine.reduce((acc, cur) => acc + cur);
console.log(sumOfNine);

for (let i = 0; i < nine.length; i++) {
  let sum = nine[i];
  for (let j = 0; j < nine.length; j++) {
    if (i === j) {
      continue;
    }
    if (nine[i] + nine[j] === 40) {
      console.log(nine[i], nine[j]);
    } else {
      continue;
    }
  }
}
