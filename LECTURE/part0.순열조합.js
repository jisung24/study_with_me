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

// 1. 배열 => static array
// 장점 : 접근 , => 가장 끝에서 (push, pop)
// arr = [1,2,3]
// arr[2] => 속도!
// 단점 : 추가, 삭제(shift, unshift) => 느림...!

// 2. 스택
// 가장 나중에 들어온 자료가 먼저 처리가 된다.
// ex) 뒤로가기 => 가장 나중에 방문한 페이지가 먼저 나옴
// ()괄호가 옳은 지 아닌 지....
// ()) => (( ))

// 3. 큐
// 먼저 들어온 게 먼저! => 줄서기, 영화 티켓 끊기..
// 티켓팅, 수강신청 =>
// 배열이 아니라, 연결리스트로 구현....!
// => 제가 드린 코드 사용하시면 됩니다..!

// 4. 연결리스트 (구현 x) => 구현 ❌
// => 배열이랑 완전 반대
// 추가 삭제 장점 => 선만 옮겨주면 끝!

// 접근 => 매우 느립니다.

// [1,2,3,4,5,6,7,8]
// 무조건 처음(head)부터 이동을 해야만한다..
// 그냥 7번을 들어가면 됨 => 연결리스트는 이게 안 됩니다.

// ===================
// 비선형 => 2가지 => 트리(방향 그래프) < 그래프
// - 트리 그래프

// 약 10000배
// 비선형.... => 선형은 그냥 비선형을 하기 위한 준비....
// 비선형 => 스택 큐를 모르면 풀 수 없다...!
// 그래프 종류
// 👉 그래프 > 트리 ( ⭕️ )
// 그래프를 탐색 => 탐색 방법 => 깊게 먼저 탐색, 표면 쭉
// DFS : 깊이 우선 탐색 ==> stack, 재귀(백트래킹... => 스스로가 스스로 )
// let factorial = (n) => {
//   // 0! = 1 => n
//   if (n === 1 || n === 2) return n; // 2! => 2 1! => 1
//   else {
//     // n * (n - 1)!
//     // 3 * 2!
//     return n * factorial(n - 1);
//   }
// };
// console.log(factorial(5));

// BFS : 너비 우선 탐색 ==> queue

// 비선형 =>

// 트리
// 이진 트리
// 그 이외 트리..
