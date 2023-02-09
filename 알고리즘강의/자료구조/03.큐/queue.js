"use strict";

// stack은 들어온 문으로 나간다.
// 큐도 배열에 쓸 수는 있지만, 어려움.
// 배열이 정적이면,
// 빈 공간이 채워지지도 않고,,
// js는 동적이라 괜찮은데, front나 last값이 무한정 커진다는 단점이 있음.

// index고민 없애는 법
// 큐를 연결리스트에 사용한다.(배열말고 연결리스트)

// queue는 rear로 들어와서 front로 나감!!!

// queue는 배열이 아니야!!!
// push pop length이런거 안 돼!!
class Queue {
  constructor() {
    this.queue = []; // 기본 배열
    this.front = 0; // 나가는 문
    this.rear = 0; // 들어오는 문
  }

  // enqueue
  enqueue(value) {
    this.queue[this.rear++] = value;
    // rear값을 증가시켜서 queue의 공간을 넓혀준 다음
    // 값을 넣는다.
  }

  // dequeue
  // queue구현능력!
  // 프론트에 있는 값을 하나 빼서 삭제 한 후에, front를 +1늘려
  dequeue() {
    const value = this.queue[this.front]; // front에 있는 값을 골라.
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  // peek : queue에 가장 앞에 있는 값을 알아내는 함수
  peek() {
    return this.queue[this.front];
  }

  // size : queue의 size를 알아냄!
  size() {
    return this.rear - this.front;
    // front가 나가니까.. 숫자가 더 작아!
  }
}

const queue1 = new Queue(); // 미리 안 해도 constructor에서 이미 초기화 해줌,
queue1.enqueue(1000);
queue1.enqueue(2000);
queue1.enqueue(3000);
queue1.enqueue(4000);
console.log(queue1);
queue1.dequeue();
console.log(queue1);
