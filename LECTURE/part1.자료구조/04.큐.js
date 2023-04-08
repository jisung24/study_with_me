"use strict";

// 자바스크립트는 큐를 직접 구현해야 함
// ❗️단 shift를 사용하면 안 됨(가장 앞에 있는 원소 제거 => O(N))
{
  // 배열로 구현을 하게 되면, pop이 O(N)이라서 불가능
  // 연결리스트로 구현을 해야 함
  // 먼저 들 => 먼저 나 => 맨 앞(
}
class Queue {
  // Array
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue : 값 넣기
  enqueue(value) {
    // push
    this.queue[this.rear++] = value;
  }

  // dequeue : 값 빼기
  dequeue() {
    // pop shift
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

// 큐 이론
// - 먼저 들어온 순서대로 나간다.
// ex) 줄 서기, dfs알고리즘, 등등 먼저 큐에 들어간 원소가 먼저 나가야 함

// - 동작 원리
// 그림으로...
// front, rear가 0부터 시작을 한다.
// 원소가 들어오면 rear가 +1되고,
// 원소가 나가게 되면 front가 +1된다

// 갑자기 꿀 팁... => highlight Matching tag 다운 받으세여... 꿀입니다 진짜
//
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(7);
queue.enqueue(10);
queue.enqueue(100);
console.log(queue);

queue.dequeue();
console.log(queue);
// 메모리 공간은 계속 차지함.
