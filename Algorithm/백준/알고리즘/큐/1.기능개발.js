"use strict";

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // dequeue
  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1; // 값을 늘려준다...!
    // 무제한으로 늘어날 수 있다는 단점이 있지만
    // 지금은 이걸 막아주진 않고,
    // size가 0일 때는 front 증가를 막아줄거야 나중에.
    return value; //
  }

  // 스택의 길이 return
  size() {
    return this.rear - this.front;
  }

  // 제일 앞에 있는 원소 return
  peek() {
    return this.queue[this.front];
  }
}

let progress = [93, 30, 55];
let speeds = [1, 30, 5];
let count = 0;
// 큐 내부에 있는 값을 수정할 순 없어..
// ❗️일단 n은 100이라서 4제곱까지 가능해....❗️☎︎
let countArr = [];
while (progress.length !== 0) {
  for (let i = 0; i < progress.length; i++) {
    progress[i] += speeds[i];
  }

  if (progress[0] >= 100) {
    // 100 이상일 때...!
    for (let i = 0; i < progress.length; i++) {
      if (progress[i] >= 100) {
        progress.shift(); // 어차피 뒤에 있는 애는 못 나감..!
        console.log(`100넘음...!`);
        count += 1;
      }
    }
  }

  console.log(`남은 배열 >> ${progress}`);
}
console.log(count);

console.log(countArr);
