"use strict";
// 오늘 알게 된 점!
// set선언 내 방법이랑 달랐어..!
{
  let arr = [1, 1, 2, 2, 1, 2, 3, 4, 2];
  // 내 방법!
  // let set = Array.from(new Set(arr));

  // 동빈나 방법
  arr = [...new Set(arr)]; // set에다가 spread연산자를 먹여준다음 배열로 만든다.
  // 중요...!
  // 코드가 훨씬 간단해졌음 => ❗️오늘 배운 것 추가❗️
}
// 말 나온 김에 spread연산자 복습..!
{
  // 1. 배열 객체 합체!
  let arr = [1, 2, 3];
  let arr2 = [4, 5, 6];
  console.log([...arr, ...arr2]);

  let obj = {
    name: "지성",
    age: 26,
  };

  console.log({ ...obj, major: "computer" });
}

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = []; // 세로 값들을 배열에 모아서..!

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

// let set = Array.from(new Set(arr.sort(compare)));
arr = [...new Set(arr)]; // 이렇게 간단하게 짤 수 있어...!
// arr을 재할당 해주는거야 => []씌워지면 배열이 됨...!

// ❗️중복된 값은 1개만 남기고 제거❗️
let compare = (a, b) => {
  // 길이 오름차순..!
  if (a.length === b.length) {
    // 어차피 소문자로 이루어짐..
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  } else {
    return a.length - b.length;
  }
};
arr.sort(compare); // 정렬 완료!

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);

// 1. set으로 만들어주는 방법
// - 재할당을 사용한다.
{
  let arr = [5, 3, 2, 33, 2, 1, 2, 1, 4, 5];
  arr = [...new Set(arr)]; // set원소들을 흩뿌려서 배열치면 돼..!
  // set도 spread연산자가 가능하구나...!
}

// 스프레드 연산자 복습해보자!
// ... => 배열에 있는 값들을 다 꺼낸다..!
{
  let arr = [1, 2, 3, 4, 5];
  console.log(...arr); // 다 꺼내서 출력!
}
