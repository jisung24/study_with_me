"use strict";
let arr = [2, 2, 3, 4, 5, 7, 7, 8];

// 1. set객체
// let set = new Set(arr);
// console.log(set, Array.isArray(arr));

// 2. arr.indexOf('찾고싶은 수') => 나는 arr에서 3의 index값을 알고싶어~

// 7이 몇 개인 지 알고싶어.
// 처음에 7을 찾았으면 이제 그 ❗️처음 찾은 7의 그 다음 위치로 가서❗️ 찾는거야!
let value = arr.indexOf(7);

// while (value !== -1) {
//   // -1이 나오기 전 까지만!
//   console.log(`${value}번에 있어!`);
//   value = arr.indexOf(7, value + 1);
//   console.log(value);
// }

{
  let arr = [1, 1, 2, 3, 4, 5, 6, 1, 3, 1, 1];
  let value = arr.indexOf(1, 0);
  let count = 1;

  while (value !== -1) {
    value = arr.indexOf(1, value + 1); // 찾은 다음 값 부터 찾아줘야 돼!
    count++;
    console.log(value, count);
  }
  console.log(`${count}개 있음!`);
}

{
  let arr = [1, 3, 5, 5, 6, 7, 8, 9, 9, 2, 3];

  let uniqueNums = arr.filter((ele, idx) => {
    return arr.indexOf(ele) === idx;
    // ❗️와... 이건 진짜 생각 못 했다...❗️
  });
  console.log(uniqueNums);
}
