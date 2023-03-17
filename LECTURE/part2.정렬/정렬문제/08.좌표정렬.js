"use strict";
// 2차원 배열인데 각 2차원 배열의 x좌표를 기준으로 오름차순
// 만약 같다면...! y오름차순 정렬..!

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let N = Number(input[0]); // 숫자 5
let arr = [];
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  // 이 묶인 데이터가 2차원 배열 상태로 배열로 들어감..!

  arr.push([x, y]); // 2차원 배열 정렬..!
  // 배열이 배열로 들어감..!
}

// let sort = (arr) => {
//   return arr.sort((a, b) => {
//     if (a[0] !== b[0]) return a[0] - b[0]; // x오름차순
//     else return a[1] - b[1]; // y오름차순
//   });
// };
// ❗️동빈나는 compareFund를 따로 짜 줌❗️
// 나는 정렬 자체를 짜줫는데, 동빈나는 compareFunc를 짜 줌!
let compare = (a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0]; // x좌표 정렬!
  else return a[1] - b[1]; // y좌표 정렬!
};

arr.sort(compare);
// compare은 함수를 호출하는거!
// compare()은 그냥 return값 숫자!!!
// arr.sort(compare()) === arr.sort(1) 이런식으로 돼서 안 돼,,!

let answer = "";
// 따로 분리를 해준다. => join사용하면 시간복잡도 먹으니까..
// 분리해서 띄어쓰기 해주는 방식으로 품!
for (let i = 0; i < arr.length; i++) {
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}
console.log(answer);

// 1. 정렬 자체를 함수로 만들지 말고, 정렬의 compare함수를 따로 짜 주자!!!
// 2. 출력할 때 나눠서 join써보지 말구..! 해보자 => 이건 유연하기..!
// 3. 2차원 배열 정렬!
