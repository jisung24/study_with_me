"use strict";
// dfs횟수
// 즉, 이건 1일 때 dfs함수를 호출해서 0으로 만들어줘야 돼! => visited를..!

// 1. 노드, 간선 입력받기
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let tc = Number(input[0]); // test case수! => 반복문
let line = 1;
function dfs(graph, n, m, x, y) {
  // 범위를 넘었을 때...!
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

  if (graph[x][y] === 1) {
    graph[x][y] = 0;
    dfs(graph, n, m, x - 1, y); // 왼
    dfs(graph, n, m, x + 1, y); // 우
    dfs(graph, n, m, x, y - 1); // 하
    dfs(graph, n, m, x, y + 1); // 상
  }
}
while (tc--) {
  // 2 1 => 2번...! => 0이면 false가 돼서...!
  let graph = [];
  let [w, h, k] = input[line].split(" ").map(Number);
  // 가로 세로 배추 개수...!
  // 그래프!
  for (let i = 0; i < h; i++) {
    graph[i] = new Array(w); // 가로 세로 크기의 그래프 만든다!
  }
  for (let i = 1; i <= k; i++) {
    // 17개...!
    let [y, x] = input[line + 1].split(" ").map(Number);
    graph[x][y] = 1; // 1로...!
  }
  console.log(graph);
}

// 원래는 visited에서 반복문 후 dfs돌렸는데,
// 이건 2차원 배열에서 1일 때 만 dfs돌려준다.....
let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(graph, n, m, i, j)) answer++;
  }
}

line += k + 1;
