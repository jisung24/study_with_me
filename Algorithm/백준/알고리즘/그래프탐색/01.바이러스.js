"use strict";
// 1에서 연결된 모든 요소의 개수를 구하는 문제!
// 1에서 도달 가능한 모든 노드의 개수! => 2 3 5 6

// index 0은 사용하지 않으면 보다 직관적임
// 0번 노드를 만드는 거!

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

// 그래프 정보 => 노드 개수, 간선 개수!
let node = Number(input[0]); // 정점의 개수
let edge = Number(input[1]); // 간선의 개수

// 노드가 7개면 1번부터 7번노드 까지 있음.
// visited도 1번부터 7번노드까지의 방문 정보를 담음

// 그래프 틀 잡기
let graph = [];
let visited = [...new Array(node + 1)].fill(false); // 아직 모든 노드 방문 ❌

{
  let visited = [...new Array(node + 1)].fill(false);
  console.log(visited);
}
// 노드의 개수만큼 그래프 표시!
// 0번은 자연스럽게 empty가 됨.
for (let i = 1; i <= node; i++) {
  graph[i] = [];
}

// 그래프 연결정보 => 간선 edge개수만큼!
for (let i = 0; i < edge; i++) {
  let [start, end] = input[i + 2].split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start); // 서로 연결을 짓는 양방향 그래프.. 라고
  // 생각하자!! => 양방향이니까!
}
let cnt = 0; // 즉, 노드의 개수..!
dfs(1);
console.log(cnt - 1);
function dfs(startNode) {
  visited[startNode] = true; // 탐색 시작노드 => 방문끝
  cnt += 1; // 1번 처리도 실시!! => 근데 1번은 빼고니까 cnt - 1을 구한다.
  for (let linked of graph[startNode]) {
    // 시작노드와 인접한 노드들
    if (!visited[linked]) {
      visited[linked] = true; // 인접한 노드도 방문처리
      dfs(linked); // 1에서 2,5 중 하나로 까지 갔는데,
      // 2에서 또 깊이 우선 탐색을 진행~
      // 인접한 노드에서 또 깊이우선탐색 실시
    }
  }
}
