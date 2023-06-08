"use strict";
let graph = [
  [0, 1, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0],
];
function dfs(n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return 0;

  let result = 1;
  if (graph[x][y] === 1) {
    graph[x][y] = 0;

    result += dfs(n, m, x - 1, y);
    result += dfs(n, m, x + 1, y);
    result += dfs(n, m, x, y + 1);
    result += dfs(n, m, x, y - 1);

    return result;
  } else {
    return 0;
  }
}
// 단지 수
// 총 수

let n = graph[0].length;
let m = n; // 같은 변수 가리킴!
let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let current = dfs(n, m, i, j);
    if (current > 0) answer.push(current);
  }
}
console.log("단지 수 >> ", answer.length);
console.log(
  "총 건물 수 >> ",
  answer.reduce((acc, cur) => acc + cur)
);
