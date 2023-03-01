"use strict";
// 일단 bfs를 구현하기 위한 queue를 만들어보자..!
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // dequeue
  dequeue() {
    let deleteValue = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
  }

  // 가장 앞에 있는 값
  peek() {
    return this.queue[this.front];
  }

  // 큐 사이즈
  size() {
    return this.rear - this.front;
  }
}
// Traversal : 순회
// 트리, 그래프의 모든 노드를 방문하는 과정 (❗️완전 탐색❗️)
// 모든 노드를 싹 다 방문을 해야하니까 완전 탐색이야!

// 즉 완전 탐색의 종류
// 1. BFS(너비 우선 탐색) : 즉, 시작점 부터 연결 돼 있는 노드들 부터 싹 다 탐색하는 방법
// 그래서 먼저 탐색하는 친구들이 먼저 나감!!!
// ❗️ 큐를 사용한다 ❗️

// BFS 구현해보자.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node; // 여기 노드는 class를 집어넣은거야...!!
  }
}
// 루트 노드 생성 & 각 위치에 노드 추가
const bt = new BinaryTree(new Node(1)); // 루트 노드를 만들어줌

bt.root.left = new Node(2);
// console.log(bt.root);
// console.log(bt.root.value);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);
bt.root.left.right = new Node(5);
bt.root.right.left = new Node(6);
bt.root.right.right = new Node(7);
// console.log(bt);
// console.log(bt.root);
console.log(bt.root.value);
let queue = new Queue();
// bfs는 그냥 템플릿 처럼 그냥 외워줘야돼 진짜..!
// 5번 10번 계속 반복해서 이 코드를 1분안에 짤 수 있어야 돼!
let bfs = (tree, startNode) => {
  let visited = []; // 방문한 노드
  // 만약 tree가 비었다면 return 0해준다.!
  if (startNode === undefined) return 0;
  else {
    queue.enqueue(startNode.value); // 큐에 루트노드 값을 넣는다.!
    // 큐는 잠시 거쳐가는 보관용..!
    // 즉 객체가 하나의 값으로 움직이는거니까
    // 값이 아니라 객체가 담긴다고 생각하자..!
  }
  //   let value = queue.dequeue();
  return queue;
};

console.log(bfs(bt, bt.root));

let arr = [];
// arr.push(bt.root); // 객체를 하나 담은거야!
// console.log(arr[0].value); //. 이렇게 접근할 수 있어...!
