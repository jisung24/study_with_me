"use strict";
// 바이러스!
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const n = Number(input[0]);
const m = Number(input[1]);

// DFS는 방문 check하는 함수라고 했어! => 여기서 check해주는거야!
const visited = new Array(n + 1).fill(false);
const graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
let count = 0;
function dfs(startNode) {
  // console.log("dfs 방문 >> ", startNode);
  count += 1;
  visited[startNode] = true; // 방문 완료!
  for (let value of graph[startNode]) {
    // 연결된 곳도 방문 해줘야 돼!
    if (!visited[value]) {
      dfs(value); // 어차피 dfs함수에서 방문 check할건데,
      // 또 visited[value] = true 안 써줘도 돼!
    }
  }
}

dfs(1);
console.log(count - 1);
