"use strict";
class MaxHeap {
  constructor() {
    this.heap = [null]; // 아무것도 없는 배열..!
  }

  // push : 값 넣기
  push(value) {
    this.heap.push(value); // 값을 넣고 정렬한다.

    // 1. heap에 가장 마지막에 삽입하고
    // 2. 형제는 필요없고 부모와 계속 비교하면서 순서를 바꾸면 된다!
    //❗️ 이러면 삽입 + 정렬 끝나..! ❗️

    // 그러기 위해 마지막 원소와 비교할 부모 index를 저장함
    let currentIndex = this.heap.length - 1; // 가장 마지막...!
    let parentsIndex = this.heap[Math.floor(currentIndex / 2)];

    while (parentsIndex !== 0 && this.heap[parentsIndex] < value) {
      // 부모가 우선순위가 더 낮거나 루트가 아닐 때 까지...! 반복한다
      // parentsIndex가 0이라는 건 이미 루트라는 거니까 출력하면 돼...!

      // ❗️swap하는 코드이다❗️
      const temp = this.heap[parentsIndex]; // 부모 index에 있는 비교대상
      this.heap[parentsIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentsIndex; // 바꿨으면 내가 부모 index자리에 위치하게 됨 (부모의 index를 현재에 대입함)
      parentsIndex = Math.floor(currentIndex / 2); // 부모의 노드를 다시..!
      // 내가 올라가면 내 부모의 index도 또 바뀌기 때문에 부모 index도 수정한다.
    }
  }

  // 1. 자 루트 노드를 삭제해 
  // 2. 그럼 루트 노드가 비었지? : 가장 마지막에 있는 노드가 루트로 와. 
  
  pop() {
    const returnValue = this.heap[1]; // 1이 가장 앞에 있는 요소야! 
    this.heap[1] = this.heap.pop(); // pop한다! 

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while(
        // 내 자식들보다 더 작으면 그만한다. 
        this.heap[currentIndex] < this.heap[leftIndex] || 
        this.heap[currentIndex] < this.heap[rightIndex]
    ){

    }
  }
}

const heap = new MaxHeap();

heap.push(4);
heap.push(5);
heap.push(6);
console.log(heap.heap[2]);
