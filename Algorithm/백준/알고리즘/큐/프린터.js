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
let queue = new Queue();

// 1. queue에 우선순위 값들을 index까지해서 전부 넣는다.!!
let properties = [1, 1, 9, 1, 1, 1];
let copy = [...properties];
let location = 0;
let sort = copy.sort((a, b) => b - a);

for (let i = 0; i < properties.length; i++) {
  queue.enqueue([properties[i], i]); // index와 같이 넣어줌..!
} // 값을 전부 넣어줌!!!
console.log(queue);
// console.log(queue.peek()[0]);
let i = 0;
let count = 0; // 나간 순서..!
let answer = 0;
// console.log(`가장 front에 있는 값 >> ${queue.peek()[0]}`);
while (true) {
  console.log(`queue size >> ${queue.size()}`);
  if (queue.peek()[0] === sort[i]) {
    // 맞다면...
    console.log(`최댓값 >> ${queue.peek()[0]}`);
    i++; // 1이 되겠지...?
    count++;
    console.log(`나가는 index >> ${queue.peek()[1]}`);
    if (queue.peek()[1] === location) {
      console.log(queue.peek()[0], "이걸 찾는거야!!!!");
      console.log("이 때 count >> ", count);
      answer = count;
    }

    queue.dequeue(); // 나간다..!
    // console.log(count, "번 째 나가게 됨");
    if (count === properties.length) {
      // 다 나가면...!
      break;
    }
  } else {
    // 아니라면...
    // console.log(`값 >> ${queue.peek()} => dequeue한 다음 다시 enqueue`);
    queue.enqueue(queue.dequeue()); //
  }
}
console.log(answer);
