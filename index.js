"use strict";

/**
 * ❗️ 범위 check 함수 ❗️
 * @param {*} N : 가로 세로 너비 (가로와 세로가 같아서 1개의 변수로)
 * @param {*} i : 2차원 배열의 세로 루프
 * @param {*} j : 2차원 배열의 가로 루프
 * @returns
 */
function rangeCheck(N, i, j) {
  // -1을 하려면 0에서도 하면 안 돼!
  // 우선 0,0 에서 -1 -1을 하면 안 돼!
  if (i <= -1 || i >= N || j <= -1 || j >= N) return false;
  return true;
}

function solution(N, arr1) {
  let arr2 = JSON.parse(JSON.stringify(arr1));

  let x = [1, -1, 0, 0, 1, 1, -1, -1];
  let y = [0, 0, 1, -1, 1, -1, 1, -1];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let sum = 0;
      // 만약 좌표가 숫자라면!
      console.log("현재 좌표 >> ", i, j);

      // 우선 범위 check를 해주기!
      for (let k = 0; k < x.length; k++) {
        if (rangeCheck(N, i + x[k], j + y[k])) {
          console.log("주변 >> ", i + x[k], j + y[k]);
          // 주변좌표까지 잘 구해짐!
          // 만약! 숫자가 나왔다면!!! => *로 바꿔줌.
          if (arr2[i + x[k]][j + y[k]] !== ".") arr2[i][j] = "*";
          // 그리고 나서 이제 본 값을 봐주는거야!
          // 만약 숫자라면 => 그냥 *로 바꿔주고.
          if (arr1[i][j] !== ".") {
            console.log(arr1[i][j]);
            arr2[i][j] = "*";
          }
          // 숫자가 아니라면 => 위에서 구한 주변 값 ❗️중에❗️ 숫자인 값을 더해준다.
          else {
            // 숫자가 아니라 .이라면!!
            if (arr1[i + x[k]][j + y[k]] !== ".") {
              // '2'이런 식으로 문자열로 값이 할당이 돼 있기 때문에, 숫자로 형변환 check해준다.
              sum += Number(arr1[i + x[k]][j + y[k]]); // 숫자인 부분만 더해준다.
            }
          }
        }

        arr2[i][j] = sum >= 10 ? "M" : sum === 0 ? "*" : sum;
      }
    }
  }

  return arr2;
}
let N = 5;
let arr1 = [
  ["2", ".", ".", "."],
  [".", ".", "9", "."],
  [".", "3", ".", "2"],
  [".", "4", ".", "."],
];
console.log(solution(4, arr1));
// arr1의 값을 변경을 해줘야하는데, 만약 값을 변경할 경우,
// 다른 값에서 영향을 끼침

// function printSum(arr1, i, j, sum) {
//   // 주변 8방을 싹 다 구해야 돼!
//   let x = [1, -1, 0, 0, 1, 1, -1, -1];
//   let y = [0, 0, 1, -1, 1, -1, 1, -1];

//   for (let i = 0; i < x.length; i++) {
//     console.log(arr1[i + x[i]]);
//   }
// }
