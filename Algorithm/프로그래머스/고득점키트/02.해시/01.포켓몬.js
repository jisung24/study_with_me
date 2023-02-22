"use strict";
// 최대한 많은 종류의 포켓몬을 선택하는 방법!
// 1마리 씩 만..!

let arr = [3, 3, 3, 2, 2, 2];
// chooseCnt는 항상 짝수이기 때문에 /를 사용해도 항상 정수가 나온다.
let chooseCnt = arr.length / 2;
console.log(`chooseCnt >> ${chooseCnt}`);
let set = Array.from(new Set(arr));
let obj = {};
// count까지 같이 세는 방법 없을까...?
// 일단 key value는 따로 하는 방법을 선택...!

for (let value of set) {
  obj[value] = 0;
}

for (let value of arr) {
  if (value in obj) {
    obj[value] += 1;
  }
}
console.log(obj);

let start = 0;
let kindOfPoketmon = [];
while (start !== chooseCnt) {
  for (let value in obj) {
    if (obj[value] >= 1) {
      if (start === chooseCnt) {
        break;
      } else {
        console.log(`${value}번 선택..!`);
        kindOfPoketmon.push(value);
        start += 1;
        console.log(`${chooseCnt}개 중 ${start}개 골랐음!`);
        obj[value] -= 1;
        console.log(`남은 포켓몬 >> `);
        console.log(obj);
      }
    } else {
      continue;
    }
  }
}
// 포켓몬 종류의 개수...!
// 고른 종류가 몇 종류인..지!
let poketmon = Array.from(new Set(kindOfPoketmon));
console.log(poketmon.length);
