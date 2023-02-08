"use strict";
class Stack {
  constructor(arr) {
    this.arr = arr;
    // 빈 배열..!
  }
  // 스택이 비어있으면 1 아니면 0
  empty() {
    let answer;
    return this.arr.length === 0 ? (answer = 1) : (answer = 0);
  }
  // 스택 가장 위에 있는 원소 출력 => 비어있다면 -1이다.
  top() {
    if (this.arr.length === 0) {
      return -1;
    } else {
      return this.arr[this.arr.length - 1];
    }
  }
  size() {
    return this.arr.length;
  }
  push(value) {
    this.arr.push(value);
    // return이 아니라 그냥 넣기만 하래...
  }
  pop() {
    if (this.arr.length === 0) {
      return -1;
    } else {
      return this.arr.pop();
      // 뺀 수를 return 하라했으니까 pop의 return값을 써주는게 맞음.
    }
  }
}
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
// console.log(input);
let stack = new Stack([]); // 빈 배열!
let length = input[0];

for (let i = 1; i <= length; i++) {
  //   console.log(input[i]);
  let command = input[i].toString().split(" ");
  // 만약 명령이 push인 경우에만 command[1]을 본다.!!
  //   console.log(command);
  if (command[0] === "push") {
    stack.push(Number(command[1]));
  }
  if (command[0] === "pop") {
    console.log(stack.pop());
  }
  if (command[0] === "top") {
    console.log(stack.top());
  }
  if (command[0] === "size") {
    console.log(stack.size());
  }
  if (command[0] === "empty") {
    console.log(stack.empty());
  }
}

// ======<< 사실 javascript는 stack을 굳이 구현 할 필요는 없어.. >> ======
