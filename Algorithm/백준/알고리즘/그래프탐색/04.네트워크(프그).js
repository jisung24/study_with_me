"use strict";
// 그래프 연결 정보..!
// 노드 간선 정보!
let node = 3; // 3개..!

// 연결에 대한 정보!!
// 0번 컴퓨터 => 0번 1번과 연결
// 1번 컴퓨터 => 0번 1번과 연결
// 2번 컴퓨터 => 2번만 연결...!  => 0 1은 연결 2는 따로 => dfs 2번 돌아야 해...!
let graph = [...new Array(node)].map((v) => []);
let visited = [...new Array(node)].fill(false);

let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

for (let i = 0; i < computers.length; i++) {
  for (let j = 0; j < computers[i].length; j++) {
    if (computers[i][j] === 1) {
      graph[i].push(j);
    }
  }
}
console.log(graph);
console.log(visited);

function dfs(startNode) {
  visited[startNode] = true;

  for (let linked of graph[startNode]) {
    if (!visited[linked]) {
      visited[linked] = true;
      dfs(linked);
    }
  }
}

let cnt = 0;
for (let i = 0; i < visited.length; i++) {
  if (!visited[i]) {
    dfs(i);
    console.log(visited);
    cnt += 1;
  }
}

console.log(cnt);
