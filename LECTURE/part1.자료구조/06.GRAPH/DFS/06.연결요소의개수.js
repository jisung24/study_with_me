"use strict";
// 덩어리 구하는 코드!
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let visited = new Array(n + 1).fill(false);
console.log(visited);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let count = 0;
for (let i = 1; i < visited.length; i++) {
  if (!visited[i]) {
    dfs(i);
    count += 1;
  }
}

console.log(count);
function dfs(startNode) {
  // 부르는 좌표...!
  visited[startNode] = true;

  for (let value of graph[startNode]) {
    if (!visited[value]) {
      dfs(value); // 방문해준다...!
    }
  }
}
