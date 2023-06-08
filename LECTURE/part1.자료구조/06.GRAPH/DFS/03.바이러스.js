"use strict";
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const n = Number(input[0]);
const m = Number(input[1]);

// 노드 7개!
// 간선 정보!
let graph = [];
let visited = new Array(n + 1).fill(false); // 방문 정보를 담은 배열!
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  // input 2 ~ 7까지 간선 정보가 있음.
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

console.log(graph);
