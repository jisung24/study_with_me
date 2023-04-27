"use strict";
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [W, H] = input[0].split(" ").map(Number);

/**
 *
 * @param {*} x : x좌표
 * @param {*} y : y좌표
 * @returns : 범위안에 들면 true 들지 않으면 false
 */

// 그래프 초기화!
let graph = [];
for (let i = 1; i <= H; i++) {
  graph[i] = input[i].split(" ").map(Number);
}
console.log(graph);

let cnt = 0;
let answer = [];
for (let i = 1; i <= H; i++) {
  for (let j = 0; j < W; j++) {
    if (graph[i][j] === 1) {
      if (dfs(i, j) > 0) {
        // 1일 때 범위에 있다면...
        answer.push(dfs(i, j));
      }
    }
  }
}
console.log(answer);
function dfs(x, y) {
  // 범위 check는 알아서 해준다.
  if (x <= -1 || x >= W || y <= -1 || y >= H) return 0;
  let cnt = 1;
  // 그리고 1일 때 dfs를 호출해주니까...!
  graph[x][y] = 0; // 0으로 바꿔주고...!
  cnt += dfs(x + 1, y);
  cnt += dfs(x - 1, y);
  cnt += dfs(x, y + 1);
  cnt += dfs(x, y - 1);
  // 상하좌우까지 끝
  // 이젠 대각선 8방을 다 살펴줘야 해!
  cnt += dfs(x + 1, y + 1); // 우상
  cnt += dfs(x + 1, y - 1); // 우하
  cnt += dfs(x - 1, y + 1); // 좌상
  cnt += dfs(x - 1, y - 1); // 좌하

  return cnt; // 내부 노드 개수...!
}
