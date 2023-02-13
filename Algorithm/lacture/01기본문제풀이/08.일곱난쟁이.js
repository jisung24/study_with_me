"use strict";
// 음..
// 9명중 7명을 뽑아서 합이 100이 되게 만들자...

// 합이 100이 되게 어떻게 만들지...?
// 아 딱 100 그럼 전체를 더해서 그 만큼 뺴연 됨..
let nine = [20, 7, 23, 19, 10, 15, 25, 8, 13];
let sumOfNine = nine.reduce((acc, cur) => acc + cur);
console.log(sumOfNine);

for (let i = 0; i < nine.length; i++) {
  // nine의 각 원소에서 40이 되는 걸 골라야 해...! 
  
}
