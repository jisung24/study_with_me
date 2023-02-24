"use strict";
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // 1. enqueue => rear에다가 값을 집어넣는다.
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 2. dequeue
  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;

    return value; // 삭제한 원소를 반환한다.
  }

  // 3. size
  size() {
    return this.rear - this.front;
  }

  // 4. peek : 큐에 가장 앞에 있는 수!
  peek() {
    return this.queue[this.front];
  }
}

const queue = new Queue();

// 큐에 1 2 3 을 넣는데.. 계속 5씩 증가를 시켜서 1이 10이 넘을 떄 까지 반복한다.!!

for (let i = 1; i <= 3; i++) {
  queue.enqueue(i);
}

while (true) {
  // 3개를 계속 넣어준다..!!
  for (let i = 0; i < 3; i++) {
    queue.enqueue(queue.dequeue() + 1);
  }
  if (queue.peek() >= 10) {
    break;
  }
}

console.log(queue);
