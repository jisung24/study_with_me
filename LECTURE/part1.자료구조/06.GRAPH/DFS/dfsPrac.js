"use strict";

// 뭉텅이 수 >> 3개 구함!
// 요소의 수 >> 구함!
let graph = [
  [1, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0, 1],
];
let n = graph[0].length; // 6
let m = n; // 같은 곳 가리킴! => 메모리 상에서...!

// 1일 때 호출! => 그 안에 재귀에서 1 0으로 만들어주자..!

let 덩어리 = 0;
let sum = 0;
let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let current = dfs(n, m, i, j); // dfs를 모든 곳에서 호출하고,
    if (current > 0) answer.push(current); // if문을 return값에 따라서 걸어주자!
  }
}
console.log(answer);
function dfs(n, m, x, y) {
  // x, y => call된 좌표!
  if (x <= -1 || x >= n || y <= -1 || y >= m) return 0;

  let nodeCnt = 1;
  if (graph[x][y] === 1) {
    graph[x][y] = 0; // 0으로 바꿔주고...!

    nodeCnt += dfs(n, m, x - 1, y);
    nodeCnt += dfs(n, m, x + 1, y);
    nodeCnt += dfs(n, m, x, y - 1);
    nodeCnt += dfs(n, m, x, y + 1);

    return nodeCnt;
  } else {
    return 0;
  }
}
