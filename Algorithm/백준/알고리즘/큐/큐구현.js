"use strict";
// 🔴 큐 동작 원리 🔴
// 오른쪽에서 왼쪽으로 빠져나감    <======= 방식으로 익히자! 배열이랑 다른거야!!!
// 지금부턴 그냥 배열로 큐를 구현하는거지 배열이 큐가 아니야!!!!!

// 1. 리어 프론트가 같은 위치에 있음.(가장 왼 쪽 0에 둘 다 있음) (처음엔 빈 큐)
// 2. 하나 씩 원소가 들어올 때 마다 rear가 왼쪽에서 +1씩 늘어남.(❗️추가된 element 🔴뒤🔴로 rear가 간다❗️)
// ❗️값이 계속해서 쌓일 수록 rear는 계속해서 한 칸씩 뒤로 가게된다❗️

// 3. 이제는 프론트의 위치!
// 처음엔 둘 다 0이었다가.
// 프론트의 위치는 항상 제일 앞에 있는 원소의 뒤에 있다. => 그렇다는 건 배열은 queue[front]가 제일 앞에 있는 원소라고 보면 돼!
class Queue {
  constructor() {
    this.queue = []; // 빈 배열이 생성
    this.front = 0; // 값이 나가는 위치
    this.rear = 0; // 값이 들어오는 위치
    // 처음엔 front, rear가 둘 다 왼쪽에 있음.
  }

  // 1. 값이 들어오면 rear가 하나 늘어남.
  enqueue(value) {
    this.queue[this.rear++] = value;
    // rear를 하나 늘리고 그 안에 value를 채워줌.
  }

  // 2. dequeue : front가 늘어남.
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
    // 즉 위에 변수로 남겨둔 이유는 return하려고...
    // 내가 프로그래머스에서 굳이 answer에 값 대입해서
    // return answer해주는 거랑 똑같아..
  }

  // 3. 즉, 프론트에 있는 this.queue[this.front]가 맨 앞에 원소.
  // peek() : 가장 앞에 있는 원소 return
  peek() {
    let frontElement = this.queue[this.front];
    return frontElement;
  }

  // 4. 큐의 사이즈
  size() {
    let queueSize = this.front - this.rear;
    return queueSize;
  }

  // 5. 가장 마지막 원소 return
  lastElement() {
    let lastValue = this.queue[this.rear];
    return lastValue;
  }
}

let queue1 = new Queue(); // 빈 배열과 rear, front가 생성된다.
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);

console.log(queue1.dequeue());
console.log(queue1);
// front의 값은 제일 앞에 있는 값의 index이다.
