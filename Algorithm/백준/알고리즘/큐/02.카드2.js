"use strict";
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

const number = Number(require("fs").readFileSync("dev/stdin").toString());
let queue = new Queue();

// 처음에 하나를 dequeue한다.
// 그리고 또 디큐하고 그 디큐된 원소를 enqueue한다.
// 결국 queue의 길이가 1이 될 때까지...!

// O(N)
for (let i = 1; i <= number; i++) {
  queue.enqueue(i);
}

// console.log(queue);
while (queue.size() !== 1) {
  //   console.log(queue);
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}
console.log(queue.peek());

// 1 2 3 4 5 6대로 큐에 들어와서...

// 1이 나가고 2가 6뒤로... 디큐 된 원소가 다시 엔큐가 되는 원리..!

// 이걸 queue.size가 1이 될 떄 까지 반복한다..!
