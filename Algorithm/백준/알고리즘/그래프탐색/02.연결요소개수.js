"use strict";
// DFS호출 횟수 세기.

// 1. 노드와 간선의 개수!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [node, edge] = input[0].split(" ").map(Number);

// 2. 그래프 visited 틀 잡아주기
let graph = [...new Array(node + 1)].map((v) => []);
let visited = [...new Array(node + 1)].fill(false);

for (let i = 0; i < edge; i++) {
  // 0 - 7
  let [start, end] = input[i + 1].split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

let answer = 0;
for (let i = 1; i < visited.length; i++) {
  if (visited[i] === false) {
    dfs(i);
    answer += 1;
  }
}
console.log(answer);

function dfs(startNode) {
  visited[startNode] = true;

  for (let linked of graph[startNode]) {
    if (!visited[linked]) {
      visited[linked] = true;
      dfs(linked); // 호출!
      // 1 => 2 5가 연결이 되어있어....
      // 처음엔 1
      // 그 다음엔 2로 호출됨.
    }
  }
}
