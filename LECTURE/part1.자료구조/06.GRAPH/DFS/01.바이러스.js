"use strict";
// 1번에서 갈 수 있는 모든 길 => 이렇게 생각하면 돼!
// 아직 격자판 안 나왔어....!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let V = Number(input[0]); // vertex
let E = Number(input[1]); // 간선(edge)
let graph = [];
for (let i = 1; i <= V; i++) {
  graph[i] = [];
}

for (let i = 2; i <= E + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
let cnt = 0;
let dfs = (v) => {
  visited[v] = true;
  cnt += 1;
  for (let value of graph[v]) {
    if (visited[value] === false) dfs(value);
  }

  return cnt;
};

let visited = new Array(V).fill(false);
console.log(dfs(1) - 1);
