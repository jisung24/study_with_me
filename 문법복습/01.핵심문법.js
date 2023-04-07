"use strict";
// 입출력 형식
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const stu = Number(input[0]);
const arr = input[1].split(" ").map(Number);

console.log(
  arr.sort((a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1;
  })
);

// 사칙연산
console.log(4 + 3);
console.log(4 - 1);
console.log(4 * 43);
console.log(3 / 4); // 어차피 0나옴!
console.log(Number((1 / 3).toFixed(1))); //toFixed는 float을 return한다.
console.log(4 % 3); // 절대 3을 넘을 순 없어!

// ❗️출력 과정만으로 시간초과를 받을 때가 있다❗️
// 🔴 여러 줄을 계속 console.log로 출력 할 때 이다 🔴
// answer += 식으로 계속 저장해서 한꺼번에 출력하는 것이 훨씬 더 수월하다.

// 한 줄씩 입력을 받는 모듈
// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let readInput = []; // 입력을 받아서 여기다가!

// rl.on("line", (line) => {
//   readInput.push(line); // 입력받은 걸 input에 넣어준다.
// })
//   // 🔴 Ctrl + D or + C를 입력했을 때 나오는 코드 🔴
//   .on("close", () => {
//     // 콘솔 입력 창에서 Ctrl + C or Ctrl + D를 입력하면 종료!
//     // 종료 되는 순간 아래 있는 코드가 실행된다.
//     console.log(readInput);
//     process.exit(0);
//   });

{
  // ⭐️ 배열 초기화 방법 ⭐️
  // 1. 직접 값을 설정해서 초기화
  {
    let arr = [1, 2, 3, 4, 5];
    console.log(arr);
  }
  // 2. 모든 원소에다가 똑같은 값을 넣고 싶을 때!
  {
    let arr = new Array(6).fill([1, 2]);
    console.log(arr);
  }
  // 3. 연속되는 값으로 초기화!
  {
    let arr = Array.from({ length: 10 }, (_, i) => i + 1);
    console.log(arr);
  }
}

{
  // ⭐️ 숫자.toFixed(1) ⭐️
  // - 소수점 원하는 위치까지 반올림해서 출력하기
  // - 🔴 문자열로 출력이 되니까 무조건 정수형으로 바꿔줘야한다 🔴
  {
    let float = 1.3347;
    console.log(Number(float.toFixed(3)));
  }
}
