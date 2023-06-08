"use strict";

// 트리
// - 계층이 있는 구조
// - 디렉트리, 월드컵 대진표, 가족 관계도... => 즉, 상하관계가 있는
// - html dom tree도 있어! => 브라우져가 생성!

// 종류
// - 이진트리 (전위 중위 후위 탐색!)

// 힙
// - 우선순위 큐는 자료구조가 아니라 개념이야.
// - 우선순위 큐를 구현하기 위한 자료구조는 힙임!

// 특징
// - 우선순위가 높은 요소가 먼저 나가는 특징이 있다.
// - 루트가 가장 큰 값이 되는 최대 힙, 루트가 가장 작은 값이 되는 최소 힙..
// 자바스크립트는 힙을 직접 구현해서 사용해야한다.

// 힙 => 배열로 구현!
// 0번 index
class MaxHeap {
  constructor() {
    this.heap = [null]; // 0번째 index는 고의적으로 null을 넣어준다.
  }

  // heap에 값 넣기
  // 값을 넣고 루트가 가장 큰 값이 올 수 있게, 정렬을 해줘야 해!
  // ❗️항상 가장 마지막에 값이 들어간다❗️
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1; // 마지막 인덱스! (방금 추가된 index)
    let parentIndex = parseInt(currentIndex / 2); // 암기하자!
    // 부모 index는 자식 parseInt(index / 2)

    // 부모가 작으면 계속 바꿔준다. (while)
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      // 자식이랑 부모 변수 내부 숫자 바꾸는 코드!
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex; // 자리 바꿨으면 현재를 부모의 index로 바꿔준다.
      // 그래야 계속 위로 올라가지...!
      parentIndex = parseInt(currentIndex / 2);
    }
  }

  pop() {
    // 무조건 가장 위에 있는 노드를! => 최대힙
    // 그리고 가장 마지막에 있는 노드를 맨 위에 있는 루트에 놓는다.
    const returnValue = this.heap[1]; // 0번째는 null이라서!
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3; // left가 2번이라고 하는걸로 봐서는
    // 무조건 left에 먼저 놓이는데,
    // 완전 이진트리...라고 생각해도 됨!

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
      // 만약 현재 루트 값이, 왼쪽이나, 오른쪽 보다 작다면 위치를 바꾼다!
      // 최대 힙은 루트가 가장 커야하기 때문이다!
    ) {
      // 루트가 왼쪽 || 오른쪽 보다 작은 상태여서
      // 가장 큰 값을 아직 모름(왼쪽 오른쪽 비교를 아직 안 함.)
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // 즉 오른쪽이 가장 클 경우...!
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // 왼쪽 요소가 더 클 경우!
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
heap.push(100);
heap.push(121);
console.log(heap.heap);

const arr = [];
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
arr.push(heap.pop());
console.log(arr);

arr.push(heap.pop());

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  // 루트로 일단 빈 노드 생성
  constructor() {
    this.root = new Node();
  }

  // 새로운 단어 등록!
  insert(string) {
    let currentNode = this.root; // 탐색을 위해 root에서부터 시작함!

    for (const char of string) {
      // 글자 하나씩 노드에 넣어주면 돼!
      if (!currentNode.children.has(char)) {
        // 자식이 c가 없을 경우!!!

        // setting해준다.
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      currentNode = currentNode.children.get(char);
    }
  }

  // has : 문자가 있는지 없는지!
  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        // 갖고있지 않다면...!
        return false;
      }
      // 갖고있다면!
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie);

console.log(trie.has("cat")); // true
console.log(trie.has("can")); // true
console.log(trie.has("cash")); // false

{
  // 정렬 알고리즘
  // => 사전순, 크기순, 어떤 순서대로 나열하는 과정!
  // => 쉽게 찾기 위해서...!
  // 비교식 정렬 : 다른 원소와 비교를 통해서 정렬하는 것!
  // 1. 버블 정렬 O(n^2) : 서로 인접한 요소를 검사해서 정렬한다.
  // 2.
}

{
  // 이진 탐색 : 반드시 정렬된 배열 안에서만 사용할 수 있음.
  const target = 123;
  const array = [1, 1, 5, 123, 400, 599, 1003, 2876, 8712];

  function binarySearch(arr, target, start, end) {
    if (start > end) return -1;
    let mid = parseInt((start + end) / 2);

    if (arr[mid] === target) return mid; // 이미 찾음!
    else if (arr[mid] > target)
      return binarySearch(arr, target, start, mid - 1);
    else return binarySearch(arr, target, mid + 1, end);
  }

  console.log(binarySearch(array, target, 0, array.length - 1));
}

{
  // 트리 구현
  // 1. 배열
  let tree = [
    undefined,
    9,
    3,
    8,
    2,
    5,
    undefined,
    7,
    undefined,
    undefined,
    undefined,
    4,
  ];

  // 트리 순회 방법 (스택, 큐를 구현해서...!)
  // 1. 전위 순회
  // 2. 중위 순회
  // 3. 후위 순회.
}

// 스택, 재귀 호출을 통해서 전위 중위 후위 구현!
