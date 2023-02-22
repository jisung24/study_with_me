"use strict";
let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.trim());
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  // enqueue (값 넣기!)
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 값 뺴기...!
  dequeue() {
    let value = this.queue[this.front];
    delete this.queue[this.front];
    // 무지성으로 빼면 front가 더 앞으로 감..
    if (this.front - this.rear < 0) {
      //음수일 때 만 front를 증가시킴..!
      this.front += 1;
    }
    return value || -1;
    // undefined 방지!!
    // 만약 뺄 정수가 없다면 -1을 return한다.!
  }

  peek() {
    return this.queue[this.front];
  }

  back() {
    // rear - front는 queue의 원소 개수..
    // 따라서 마지막 index는 rear - 1로 접근해야함
    return this.queue[this.rear - 1];
  }

  size() {
    return this.rear - this.front;
    // 위에 무지성으로 front증가를 막아놔서
    // 결국 front가 rear를 넘을 리는 없어..!
  }

  empty() {
    let value = this.size() === 0 ? 1 : 0;

    return value;
  }
}

let queue = new Queue();

let answer = [];
for (let i = 1; i < input.length; i++) {
  let command = input[i];
  switch (command) {
    case "front":
      answer.push(queue.peek());
      break;

    case "back":
      answer.push(queue.back());
      break;

    case "size":
      answer.push(queue.size());
      break;

    case "empty":
      answer.push(queue.empty());
      break;

    case "pop":
      answer.push(queue.dequeue());
      break;

    default: // _안 쓰는 변수..!
      let [_, val] = command.split(" ");
      queue.enqueue(+val); // map을 쓰는 것보단 어차피 안 쓰는 거에 map쓰지 말자...!
  }
}

console.log(answer.join("\n"));
