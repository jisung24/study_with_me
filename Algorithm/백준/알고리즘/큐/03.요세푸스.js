"use strict";
let [length, k] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

class Queue {
  constructor() {
    this.queueArr = [];
    this.front = 0;
    this.rear = 0;
  }
  // 1. 값 넣기 : rear가 하나 늘어나고 값이 들어감.
  enqueue(value) {
    this.queueArr[this.rear++] = value;
  }

  // 2. dequeue : front가 하나 늘어나고 값이 빠짐
  dequeue() {
    let value = this.queueArr[this.front];
    delete this.queueArr[this.front]; // front에 있는 data를 삭제!
    this.front++; // front가 값이 삭제되고 하나 늘어난다.!
    return value;
  }

  // 3. peek : 가장 먼저 나갈 원소 return
  peek() {
    let frontElement = this.queueArr[this.front];
    return frontElement;
  }

  // 4. size : 큐의 길이!
  size() {
    let length = this.rear - this.front;
    return length;
  }
}
let queue = new Queue(); // 빈 배열 생성...!

for (let i = 1; i <= length; i++) {
  queue.enqueue(i);
}

// n은 5000까지니까 n^2으로 풀어도 돼...!!
let arr = [];
while (arr.length !== 7) {
  // 배열의 길이가 7이 될 때 까지...!
  // k가 3이면 3번 하는데 2번까진... 그냥 enqueue를 시키고 3번째는 dequeue만!

  if (queue.size() < k) {
    k %= queue.size();
    for (let i = 1; i <= k; i++) {
      // 1번 부터 k번까지...!
      if (i === k) {
        arr.push(queue.dequeue());
      } else {
        queue.enqueue(queue.dequeue());
      }
    }
  } else {
    for (let i = 1; i <= k; i++) {
      // 1번 부터 k번까지...!

      if (i === k) {
        arr.push(queue.dequeue());
      } else {
        queue.enqueue(queue.dequeue());
      }
    }
  }
}
console.log(`<${arr.join(", ")}>`);
