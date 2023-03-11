"use strict";
//it설명 3줄이내.... => 책애 없음 ㄹㅇ문과적 뇌피셜과목이네 이거 글 잘 지어내서 잘 쓰면 a
// 나랑같은조 ㄲㄲㄲㄲㄲㄲㄲㄲㄲㄲㄲㄲㄲㄲㄲㄲㄱㅃㅃㅃㅃㅉㅉㄹㅈ
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
let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
let queue = new Queue();
let speedQueue = new Queue();

// 큐 초기화 해줌
for (let i = 0; i < progresses.length; i++) {
  queue.enqueue(progresses[i]);
  speedQueue.enqueue(speeds[i]);
}
console.log(queue);
console.log(speedQueue);
// 큐를 가 다 없어질 때 까지 반복한다.
let dequeueArr = [];
let countArr = [];
let i = 0;
while (queue.size() > 0) {
  // 값을 추가하고 계속 dequeue해준다..!!
  // 일단 한 번 씩 다 돌려줘야 돼...!!!!!!
  //   console.log(queue);
  //   console.log(`큐 사이즈!!!!!! ${queue.size()}`);

  let count = 0;
  for (let i = 1; i <= queue.size(); i++) {
    // console.log("gk.....");
    queue.enqueue(queue.dequeue() + speedQueue.peek());
    speedQueue.enqueue(speedQueue.dequeue());
    console.log(queue);
  }
  // ❗️ 한 바퀴 돌고 증가를 시켜줬어❗️

  //   console.log("확인하자...");
  // 이제 확인을 해야 돼!
  if (queue.peek() >= 100) {
    // 100이 안 나올 때 까지 반복문을 돌려줘야 돼!
    while (true) {
      dequeueArr.push(queue.dequeue());
      speedQueue.dequeue();

      count++;

      if (queue.peek() < 100 || queue.size() === 0) {
        if (count !== 0) {
          countArr.push(count);
        }
        break;
      }
      // 다시 빠져나간다.!!
    }
  }
  i++;
  if (i === 20) {
    break;
  }
}
console.log(countArr);
