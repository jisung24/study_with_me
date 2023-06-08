"use strict";
// 매우매우 출제 빈도가 높다!
// => 반드시 알아야 해!

// 그래프 탐색하는 알고리즘 (Search)

// DFS()
// BFS()

// 1. 스택 복습
{
  let stack = [];
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);

  console.log(stack);

  let copy = [...stack].reverse();
  // console.log(copy).pop();
  // 스택을 뒤집어서 출력해주는 방법도 있음.!
}

// 2. dfs 원리 이해하기
// => 기본적으로 2차원 배열을 사용하자!
// => 스택을 사용한다.

// => 모든 노드를 딱 1번씩만 탐색하기 위함이다.
// => 그래프 탐색 알고리즘.

// 🟡 동작원리 (dfs는 가장 깊은 부분부터 우선적으로 탐색을 진행하는 알고리즘이야! )
// - 1. 시작노드를 스택에 넣고 방문 처리한다.
// 2.

const graph = [
  [], // 0번 정점은 없다는 표시!
  [2, 3, 4], // 1번은 2 3 4 번 노드와 연결돼있음!
  [1],
  [1, 5, 6],
  [1, 7],
  [3, 8],
  [3],
  [4],
  [5],
];

let visited = new Array(9).fill(false); // 아직 방문 안 해줬다는 의미! => 노드가 방문될 때 마다 방문했다고 해줘야 돼!
// 1번노드부터 시작이라서, 0번 노드는 그냥 index일치 차원 만들기만 하고 건들지는 않는다.

function DFS(graph, v, visited) {
  // v : 몇 번 노드에서 dfs를 시작할것인가.?
  // 한 번 dfs가 끝날때마다 연결된 모든 노드를 전부 방문해줘!
  // => 연결 안 된 부분은 다시 dfs를 돌려야 돼!
  visited[v] = true; // 시작노드 방문했다는 표시! // 2를 방문처리 해주고....!

  for (let value of graph[v]) {
    // 1과 2 3 4가 연결돼있음.  // 2와 연결된 x
    if (!visited[value]) {
      // 2를 방문 안 했으면
      console.log("hello");
      DFS(graph, value, visited); // 2에서 dfs진행! x ==> visited방문 처리 해주는 것이 최종 목표!!
    }
  }
}

DFS(graph, 1, visited);

console.log(visited);
