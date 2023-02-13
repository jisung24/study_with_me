"use strict";
// 스택 : 프링글스 생각하자!
// 한 쪽에만 구멍이 있고, 여기서 추가 삭제가 일어나는 자료구조.
// 배열과 비슷해서 배열로 stack을 많이 구현한다.

// 스택 문제
// 1. 짝 맞추기 문제 : 왼쪽을 push하고 오른쪽을 pop해서 stack의 length가 0이라면... 짝이 맞는거임.
class Stack {
  constructor(arr) {
    this.arr = []; // 빈 배열을 그냥 초기화 시켜준다!
    // class의 인스턴스가 만들어지면 알아서 빈 배열을 초기값으로 만들어준다.
  }

  // 1. push : 값을 집어넣는다.
  push(value) {
    this.arr.push(value); // 값을 넣어줌.
    return this.arr; // 배열을 return
  }

  // 2. pop : stack에서 가장 위에 있는 원소 삭제!
  pop(value) {
    if (this.arr.length === 0) {
      // 비어있어!
      console.log("stack 비어있어요!");
    } else {
      this.arr.pop(); // 삭제한 값을 return한다.
    }
  }

  // 3.가장 위에 있는 원소 확인!
  top() {
    let answer =
      this.arr.length === 0 ? "stack is empty" : this.arr[this.arr.length - 1];
    return answer;
  }

  // 4.stack의 모든 원소 출력!
  printStack() {
    this.arr.forEach((value) => console.log(value));
  }
  // 5. 비어있는지 확인!
  isEmpty() {
    let answer = this.arr.length === 0 ? true : false; // true : 비어있음  false : 비어있지 않음(값이 있음)
    return answer;
  }
}

// "()((()()))" 가 짝이 맞는지 알아보자!
let bracket = "(()(";
let stack1 = new Stack(); // 빈 스택 하나를 생성한다.
let answer;
for (let value of bracket) {
  if (value === "(") {
    // 열린거면
    stack1.push(value);
  } else {
    if (stack1.isEmpty()) {
      // 비어있다면..
      answer = false;
    } else {
      stack1.pop();
      answer = true;
    }
  }
}

if (stack1.isEmpty() === true) {
  answer = true;
} else {
  answer = false;
}
console.log(answer);
