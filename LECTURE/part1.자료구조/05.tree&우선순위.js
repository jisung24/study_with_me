"use strict";

// 자바스크립트는 큐를 직접 구현해야 함
// ❗️단 shift를 사용하면 안 됨(가장 앞에 있는 원소 제거 => O(N))
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue : 값 넣기
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // dequeue : 값 빼기
  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1; // front위치를 하나 증가시킨다.
    return value;
  }

  // peek() : 맨 앞에 있는 즉, front에 있는 원소 반환!
  peek() {
    return this.queue[this.front];
  }

  // size() : 큐 사이즈!
  size() {
    return this.rear - this.front;
  }
}
