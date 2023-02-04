"use strict";
// dfs : 깊이 우선 탐색
// bfs : 너비 우선 탐색

// 각 연결된 노드들을 적어준다.
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H", "I"],
  G: ["E", "J", "K"],
  H: ["F", "L"],
  I: ["F", "M"],
  J: ["G", "N"],
  K: ["G", "O"],
  L: ["H"],
  M: ["I", "P"],
  N: ["J"],
  O: ["K"],
  P: ["M"],
};

const bfs = (graph, start) => {
  const checked = []; // check가 된 노드
  const willCheck = []; // 아직 check를 못 한 node

  willCheck.push(start);

  while (willCheck.length !== 0) {
    const node = willCheck.shift(); // 큐(First In First Out)
    if (!checked.includes(node)) {
      checked.push(node);
      willCheck.push(...graph[node]);
    }
  }
  return checked;
};
console.log(bfs(graph, "A"));
