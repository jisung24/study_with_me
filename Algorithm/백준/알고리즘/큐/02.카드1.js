"use strict";
// 1 2 3 4 5 6 7
// 1을 버린다.
// 2를 카드 맨 밑에 깐다.
// 3 4 5 6 7 2

// 3 4 5 6 7 2
// 3을 버린다.
// 4를 깐다.

// 5 6 7 2 4
// 5버림
// 6을 깐다.

// 7 2 4 6

// 이런식으로 queue가 비어질 때 까지 반복한다.

// 앞에 있는 수가 계속 먼저 나간다 => queue

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
}

let N = parseInt(require("fs").readFileSync("dev/stdin").toString());
let queue = new Queue();
let dequeueArr = []; // 큐에서 디큐 된 값들을 저장하는 배열.
// 일단 큐에 모든 값을 초기화 시켜준다..!
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.size() > 0) {
  // 1. 맨 앞에 있는 값을 dequeue시킴
  dequeueArr.push(queue.dequeue());
  queue.enqueue(queue.dequeue());

  console.log("현재 큐 >> ");
  console.log(queue);
}

console.log(dequeueArr.join(" "));
