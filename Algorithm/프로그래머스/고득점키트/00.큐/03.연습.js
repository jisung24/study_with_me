"use strict";
// 큐에서 큐로 보내는거...!
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];

    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

let firstQueue = new Queue();
firstQueue.enqueue(1);
firstQueue.enqueue(2);
firstQueue.enqueue(3);
firstQueue.enqueue(4);
firstQueue.enqueue(5);
let sq = new Queue();
console.log(firstQueue, sq);

while (true) {
  sq.enqueue(firstQueue.dequeue());

  if (firstQueue.size() === 0) {
    break;
  } else {
    console.log(sq);
  }
}
