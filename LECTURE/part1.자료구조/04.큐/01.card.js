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
    this.front += 1;
    return value;
  }

  // peek
  peek() {
    return this.queue[this.front];
  }

  // size
  size() {
    return this.rear - this.front;
  }
}

let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
