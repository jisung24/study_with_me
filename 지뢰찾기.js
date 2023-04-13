"use strict";
function dfs(graph, n, m, x, y) {
  // n : 가로
  // m : 세로
  // x, y => 현재 dfs를 수행하는 좌표!
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }

  // 범위 안에 있을 경우!
  let sum = 0;
  if (graph[x][y] !== ".") {
    // 아직 방문 처리하지 않았다면..!
    sum += graph[x][y];
    console.log(sum);

    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y + 1);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y + 1);
    dfs(graph, n, m, x + 1, y - 1);
    dfs(graph, n, m, x - 1, y + 1);
    dfs(graph, n, m, x - 1, y - 1);

    return true;
  }

  return false; // 방문을 이미 했을 경우!
}

let N = 5;
let arr1 = [
  ["1", ".", ".", ".", "."],
  [".", ".", "3", ".", "."],
  [".", ".", ".", ".", "."],
  [".", "4", ".", ".", "."],
  [".", ".", ".", "9", "."],
];
let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (dfs(arr1, N, N, i, j)) {
      result += 1;
      console.log(arr1);
    } else {
      console.log(arr1);
    }
  }
}

console.log(result);
console.log(arr1);
