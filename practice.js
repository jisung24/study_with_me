"use strict";
// 추가 일 때 배열 전체가 정렬되지 않는 이유
// ❗️반정렬 상태여서 그럼❗️
// => 즉, 자식들 끼리는 정렬이 되지 않아!
// => 중복값 허용x

class MaxHeap {
  constructor() {
    this.heap = [null]; // [null]
  }

  // push : 힙(배열)에 값을 추가한다.
  push(value) {
    this.heap.push(value);

    // 추가 한 다음, 부모와만 정렬을 해줘야 돼!
    // 형제노드와는 정렬이 이뤄지지 않음 => 반정렬 상태여서 그래!
    let currentIndex = this.heap.length - 1;
    let parentIndex = parseInt(currentIndex / 2);

    // 현재 값이 부모보다 크면 계속 부모위치를 교체해준다!
    // 즉, heap의 부모 index가 value보다 작으면...계속 swap
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      let temp = this.heap[parentIndex];
      this.heap[parentIndex] = value; // 현재값을 value라고 적어줘도 된다.
      this.heap[currentIndex] = temp; // 바꿔줌.
      // ❗️즉, 큰 값이 배열 왼쪽으로 이동한다❗️
      currentIndex = parentIndex; // index도 바꿔주면 돼!
      parentIndex = parseInt(currentIndex / 2);
    }
  }

  // 무조건 root값을 빼준다!
  pop() {
    // 루트 정점만 남은 경우! ==> 배열 1개만 남은 경우!
    if (this.heap.length === 2) return this.heap.pop();
    // [ null, 3 ] => 1개... null 

    // 자식 
    // 원소의 개수가 여러 개 인 경우!
    let returnValue = this.heap[1]; //
    this.heap[1] = this.heap.pop(); // 남아있는 heap에서 가장 마지막 값을 root위치에 넣어준다.

    let currentIndex = 1; // 배열의 0번은 비워둠!
    let leftIndex = 2;
    let rightIndex = 3;

    // 뺄 때 current를 left한 번 right한 번 비교한다.
    // 만약 작다면 계속 아래로 내려준다.!
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // center가 left or right보다 작아...!

      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // 둘 중 큰 값이랑 바꾼다.! => 오른쪽이랑 바꾼다.
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex; // 현재 index를 right로 바꿔준다.
      } else {
        // 둘 중 큰 값이랑 바꾼다.! => 오른쪽이랑 바꾼다.
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

let heap = new MaxHeap();

let input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(input[0]);
let answer = "";
// 1번부터 13번!
for (let i = 1; i <= N; i++) {
  let data = Number(input[i]);
  if (data === 0) {
    // 즉, 남은 배열이 1일 때 null 일 때는 빼주면 안 돼!!!
    if (heap.heap.length === 1) {
      answer += 0 + "\n";
    } else {
      answer += heap.pop() + "\n";
    }
  } else {
    // 0이 아니면...!
    heap.push(data);
  }
}

console.log(answer.trim());

// null일 때는 pop해주면 안 돼!
// 즉, [null]일 때는 빼주지마!
// length !== 0 0아니고 1이야 진짜 제발!!!
