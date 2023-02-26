// "use strict";
// // bfs
// // 2개의 큐를 활용한다.!!!

// let visited = []; // 탐색이 끝난 큐
// let needVisit = []; // 탐색이 아직 필요한 큐
// let startNode = "A";

// needVisit.push(startNode); // 시작 노드

// while (needVisit.length > 0) {
//   // 더 필요한 노드가 없을 때 까지..!
//   let node = needVisit.shift(); // 일단 A노드를 빼서 저장해서
//   // 이 A와 연결 된 노드들을 다시 visited에 넣어준다!!!
//   // 만약 방문이 끝난 노드에 노드가 없다면..!

//   // 일단 빼서 저장하는 게 매우 중요하다..!
//   if (!visited.includes(node)) {
//     visited.push(node); // 방문이 끝난 노드에 A를 넣어주고
//     needVisit = [...needVisit, ...graph[node]]; // 넣어준다!
//     // node(A)와 연결 된 노드를 다시 넣어준다...!
//     // 기존꺼는 왜 합치냐면 A이후에 B C가 동시에 들어오고
//     // B와 연결된 A D여기서는 D만 들어오는데, C가 아직 안 나갔기 때문에,
//     // 처음꺼와 합쳐준다.
//     console.log("방문이 필요한 노드 >> ", needVisit);
//     console.log(`방문이 끝난 노드 >> ${visited}`);
//   }
// }
// console.log(visited);

let graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

let needVisitStack = [];
let visitedQueue = [];
let startNode = "A";

needVisitStack.push(startNode);

while (needVisitStack.length > 0) {
  let node = needVisitStack.pop(); // 일단 하나를 꺼낸다!

  if (!visitedQueue.includes(node)) {
    visitedQueue.push(node); // 방문 끝난 노드에 넣어준다!

    // 방문이 필요한 그래프에,
    // 기존에 아직 검사 안 끝난 그래프랑 pop돼서 나간 노드와 연결 돼 있는 노드들
    needVisitStack = [...needVisitStack, ...graph[node]];
  }
}

console.log(visitedQueue);
