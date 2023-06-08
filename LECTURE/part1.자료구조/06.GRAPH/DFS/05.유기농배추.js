"use strict";
let graph = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
];

// 덩어리 개수 구하는 코드!
let n = graph.length; // 세로
let m = graph[0].length; // 가로
result += dfs(n, m, x, y);
let 덩어리 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let current = dfs(n, m, i, j);
    if (current > 0) 덩어리 += 1;
  }
}

console.log("덩어리 수 >> ", 덩어리);

function dfs(n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return 0;

  let result = 1;
  if (graph[x][y] === 1) {
    graph[x][y] = 0;

    result += dfs(n, m, x - 1, y);
    result += dfs(n, m, x + 1, y);
    result += dfs(n, m, x, y - 1);
    result += dfs(n, m, x, y + 1);

    return result;
  } else {
    return false;
  }
}
