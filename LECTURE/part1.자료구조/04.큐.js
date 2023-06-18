"use strict";

// BFS DFS
//
// let graph = [
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 1],
// ];

//   dfs로 하면

//   [1, 0, 9, 10, 11],
// [2, 0, 8, 0, 12],
// [3, 0, 7, 1, 13],
// [4, 5, 6, 0, 14],
// [0, 0, 0, 0, 15]
// 쭉 갈 수 있다면, 도중에 방향을 절대로 틀지않는다. => 무조건 가던 방향으로 그대로 간다.
// ⚪️ 만약 틀어야 최단 거리대로 가는 거라면, 최단거리를 구하는데, dfs는 옳지않은 알고리즘이 됨.

// 이렇게 먼저 탐방을 하게 됨 => 쭉 갈 수 있다면, 방향을 틀지않고 쭉 가는 방법1

class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

let visited = new Array(graph.length).fill(false);
console.log(visited);

function bfs(startNode) {
  // 우선 큐를 만든다.! => visited를 바꿔줄거기 때문에, 큐는 여기서 지역으로 해도돼!
  let queue = new Queue();
  queue.enqueue(startNode); // 일단 넣는다!!!

  while (queue.size() !== 0) {
    let out = queue.dequeue(); // 뺸다 => 이거랑 연결된 그래프 원소들을 넣어준다!
    for (let value of graph[startNode]) {
      if (!visited[value]) {
        queue.enqueue(value);
        visited[value] = true;
      }
    }
  }
}

bfs(1);
console.log(visited);
