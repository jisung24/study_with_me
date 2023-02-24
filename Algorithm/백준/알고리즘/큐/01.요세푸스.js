"use strict";
let [N, K] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

// queue를 구현한다.!!
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue
  enqueue(value) {
    // rear를 하나 증가시켜준 다음 value를 넣는다.!
    this.queue[this.rear++] = value;
  }

  // dequeue
  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1; // 삭제하고 프론트를 1증가
    return value; // 삭제한 원소를 return한다.
  }

  // size() : 큐의 사이즈
  size() {
    return this.rear - this.front;
  }
}

let queue = new Queue();

for (let i = 1; i <= N; i++) {
  // 하.. 일단 큐에 값을 다 넣어 준 다음 시작해.
  queue.enqueue(i);
}
let numberArr = [];
while (true) {
  // 큐의 사이즈가 0이 될 때 까지 반복한다.!!
  for (let i = 0; i < K; i++) {
    console.log(`${K}중 ${i}`);
    if (i === K - 1) {
      // 마지막에만 빼고 다시 엔큐 시킴
      numberArr.push(queue.dequeue());
    } else {
      // 3번쨰 수 전 까지는 계속 다시 디큐와 엔큐를 반복한다.
      queue.enqueue(queue.dequeue());
    }
  }
  console.log(queue);
  console.log(`쌓인 값 >> ${numberArr}`);
  if (queue.size() === 0) {
    break;
  }
}

console.log(`<${numberArr.join(", ")}>`);

let arr = [1, 2];
