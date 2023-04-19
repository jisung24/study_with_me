"use strict";
// 노드 간선 정보
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// 그래프 노드 개수! => +1로 그래프 초기화 시켜줘야 함!
let node = Number(input[0]); // 7개!
// 🔴 edge수 🔴
let edge = Number(input[1]); // 6개!

// 그래프 default초기화!
let graph = [...new Array(node + 1)].map((v) => []);
let visited = [...new Array(node + 1).fill(false)]; // visited를 일단 전부 false로!

// 그래프 && visited 초기화
for (let i = 0; i < edge; i++) {
  let start = Number(input[i + 2].split(" ")[0]);
  let end = Number(input[i + 2].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}
console.log(graph);

// dfs (1부터 시작)
let answer = 0;
let dfs = (startNode) => {
  visited[1] = true;

  // startNode와 연결된 모든 곳을 true로 방문해준다!!!
  for (let linked of graph[startNode]) {
    // startNode와 연결된....것들 싹 다...!
    if (!visited[linked]) {
      // 2와 5가 들어올거야 순서대로
      // 2일 때 dfs를 한 번 돌고... 5일 때도 한 번 돌고... 이런식으로!
      // false일 경우...!
      visited[linked] = true; // 방문 했다고 표시해준다..!
      // 2를 방문해준다... 이후 또 5을 또 계속
      answer += 1;
      dfs(linked); // 이걸 안 해주면 처음에 1과 연결된 2 5만 방문하고... 2와 5와 연결된 곳도 방문을 계속 해줘야 함!
    }
  }
  return answer; // 1자신은 빼야하므로!
};

console.log(dfs(1));

// dfs를 통해서 visited와 dfs한 번에 연결된 노드가 몇 개가 있는 지 알 수 있음..
