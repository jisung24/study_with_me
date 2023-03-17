const PriorityQueue = require("priorityqueuejs");
const queue = new PriorityQueue((a, b) => a - b); // b - a면 최소힙이 된다

// 최대힙..!
let arr = [1, 1000, 2000, 25, 58, 99];

// arr의 최댓값을 구하여라!
// 최대힙!

// 배열을 pop
while (arr.length !== 0) {
  queue.enq(arr.pop());
}

// 나머진 index개념이 아니야..!
console.log(`arr의 최댓값 >> ${queue.deq()}`);
