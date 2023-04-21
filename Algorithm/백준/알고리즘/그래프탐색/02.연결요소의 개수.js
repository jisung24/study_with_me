"use strict";
// 연결요소란 즉, 쉽게 말하면 dfs를 돌았을 때 다 돌 수 있는 한 덩어리를 뜻한다.
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// 노드, 간선 개수 입력!
let [node, edge] = input[0].split(" ").map(Number);

// 그래프 틀 입력
let graph = [...new Array(node + 1)].map((v) => []);
let visited = [...new Array(node + 1)].fill(false);

// 그래프 입력!
for (let i = 0; i < edge; i++) {
  let [start, end] = input[i + 1].split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

// dfs 덩어리 구하는 공식..!
// 즉 전체 그래프를 dfs 몇 번 만에 돌 수 있는지!
let count = 0;
for (let i = 1; i < visited.length; i++) {
  if (visited[i] === false) {
    dfs(i);
    console.log(visited);
    count += 1;
  }
}
console.log(count);
function dfs(startNode) {
  visited[startNode] = true;

  for (let linked of graph[startNode]) {
    if (!visited[linked]) {
      visited[linked] = true; // 2와 5도 true로 만들고
      dfs(startNode); // 계속 빼먹어....
      // 2와 5에 대해서도 dfs를 한 번 진행해보자!
      // 제발...
    }
  }
}
