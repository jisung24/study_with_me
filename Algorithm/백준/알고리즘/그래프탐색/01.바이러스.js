"use strict";
// 1에서 시작한 dfs횟수!
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let node = Number(input[0]); // 7개...!
let edge = Number(input[1]);

// 기본 골격
let graph = [...new Array(node + 1)].map((v) => []);
let visited = [...new Array(node + 1)].fill(false);

// 직접 골격 안에다가 초기화!
for (let i = 0; i < edge; i++) {
  let [start, end] = input[i + 2].split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

// dfs를 한 번 호출한다음에 visited true된 개수 확인해주면 돼!
dfs(1);
console.log(visited.filter((e) => e === true).length - 1);

function dfs(startNode) {
  let answer = 1;
  visited[startNode] = true;

  for (let linked of graph[startNode]) {
    // console.log(linked); // 1개씩 나오겠지? => 연결 된 노드를 찾음
    if (!visited[linked]) {
      // 아직 방문하지 않았다면...!
      visited[linked] = true; // true로 바꿔준다.
      dfs(linked);
      answer += 1;
    }
  }

  return answer;
}
