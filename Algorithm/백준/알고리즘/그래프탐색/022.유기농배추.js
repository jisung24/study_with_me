"use strict";
// DFS => true false로...
// 조건은 main에서 주고, 호출을 조금!

// 격자는 그래프 0,0부터
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let line = 1;

// N번 반복!
while (N--) {
  // 가로, 세로, 배추의 개수
  let [m, n, k] = input[line].split(" ").map(Number); // 1번째가 아니라 line으로 적어줘야 돼!
  // input에서의 위치가 동적으로 바뀌기 때문이다...
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  // 1의 위치로 초기화!
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1; // 1의 위치를 정해줌!
  }

  // dfs덩어리 횟수!
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) answer += 1;
    }
  }

  line += k + 1;
  console.log(answer);
}
function dfs(graph, n, m, x, y) {
  // 범위에 벗어나는지 => false
  // 범위가 제대로 됐는 지 => true
  // - 값이 0인 좌표에서 호출했는지
  // - 값이 1인 좌표에서 호출했는지
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;
  else {
    // 우선 다 불러줄거야 모든 좌표에서!
    // true부분!
    if (graph[x][y] === 1) {
      graph[x][y] = 0; // 0으로 바꿔준다.

      dfs(graph, n, m, x - 1, y);
      dfs(graph, n, m, x + 1, y);
      dfs(graph, n, m, x, y + 1);
      dfs(graph, n, m, x, y - 1);

      return true;
    } else {
      return false;
    }
  }
  // 0인부분
}
