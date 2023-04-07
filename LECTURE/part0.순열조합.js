"use strict";
/**
 * 🔴 중복이 없는 조합(3,1과 1, 3은 같다!) 🔴
 * 🟡 시간복잡도 2의 n제곱.. 높아.. 🟡
 * @param {*} arr : 배열
 * @param {*} n : 선택할 수
 * @returns : 조합해서 나온 배열을 return함
 */
let combination = (arr, n) => {
  let answer = [];
  if (n === 1) return arr.map((v) => [v]);

  for (let i = 0; i < arr.length; i++) {
    let fixed = arr[i]; // 하나 고정 시켜놓고!!
    let rest = arr.slice(i + 1); // 나머지로 자름! => 만약 중복 조합이라면 fixed를 포함해야 돼!
    let recursion = combination(rest, n - 1); // 나머지에서 또 조합을 구한다!
    let combine = recursion.map((v) => [fixed, ...v]);

    answer.push(...combine);
  }

  return answer;
};
console.log(combination([1, 2, 3, 4], 2).length); // 그래서 조합 : 4 * 3 / 2! === 6 맞음!

// 13과 31은 다르다고 판단한다.
let permutations = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);

  let result = [];
  arr.forEach((value, index, arr) => {
    // 1 2 3 4 => 지금 2면 2만 제외하고 1 3 4중 골라야 돼!
    // 마찬가지로 3이면 또 2를 선택할 수 있어 => 2 3 3 2는 다른거야!
  });
};

let name = "지성";

switch (name) {
  case "지성이":
    console.log("NONO!");
    break;
  case "지성":
    console.log("문자열도 사용가능~");
    break;
}

console.log(parseInt(356 / 100) * 100);
// 십의 자리는 다 0으로 만든다!
console.log(parseInt(3560 / 100) * 100);
console.log(parseInt(35546 / 100) * 100);
console.log(parseInt(54 / 100));

console.log(!true ? "true" : "false");

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;

  if (i === 7) break;
  console.log(i);
}

{
  // 1의 자리 생략하기!
  console.log(parseInt(54322 / 10) * 10);
  // 10으로 나누면 당연히 1의 자리는 사라지겠지????
  // 그럼 10곱하면 돼!

  console.log(45 % 14); // 절대 나눠지는 수를 넘을 수 없어
  console.log(14 % 13); // 13으로 한 번 더 나눌 수 있었으면 나눴겠지!!
  // 범위는 항상  0 ~ 나눠지는 수 - 1
}
