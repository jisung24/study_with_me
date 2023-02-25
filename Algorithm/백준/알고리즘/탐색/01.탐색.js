"use strict";
// dfs : 깊이 우선 탐색
// bfs : 너비 우선 탐색

// bfs같은 경우엔 queue로 구해준다...!
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }
  // enqueue
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // dequeue
  dequeue() {
    if (this.size() === 0) {
      return -1;
    } else {
      let value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1; // front를 1증가시킨다..!
      return value;
    }
  }

  // peek : 큐에서 가장 앞에 있는 수 return!
  peek() {
    return this.queue[this.front];
  }
}

const graph = {
  // 각 노드가 property
  // 각 노드와 연결 돼 있는 노드들을 value로 설정함.
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

let queue = new Queue();

let arr = [1];
let i = 0;
while (arr.length > 0) {
  // 중간에 0이 돼도 끝에서만 0이 안 되면 계속 반복이 된다.!!!
}
