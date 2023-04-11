"use strict";
// 우선순위 큐 => 힙
// 힙 => 우선순위 큐를 구현하기 위해 고안되었다!
// 즉, 자식들끼리 순위는 상관없고,
// 루트만 자식보다 크거나 같으면 돼!

// ❗️배열로 Heap구현함❗️
class MaxHeap {
  constructor() {
    this.heap = [null]; // 첫 번째 원소는 null이다.
  }

  // push : 힙에 값 넣고 정렬해야 한다.
  // 일단 가장 끝에 넣는다.
  push(value) {
    this.heap.push(value);

    // 현재 노드와 부모만 정렬해주면 돼!
    // 현재와 형제 노드는 정렬 x (❗️힙은 반 정렬❗️)
    let currentIndex = this.heap.length - 1;
    let parentIndex = parseInt(currentIndex / 2);
    // 만약 currentIndex => 4면
    // 부모는 3아니면 2야! => 형제가 없어도 !

    // 현재 값 heap[currentIndex]가 부모보다 크면 바꾼다.!
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      // 작으면..!
      // swap하는 코드!
      let temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      // index위치도 바꿔야 돼!
      currentIndex = parentIndex;
      parentIndex = parseInt(currentIndex / 2);
      // current위치가 바껴서 당연히 지금 current의 부모의 위치도 올려줘야지!
    }
  }

  // 값을 빼기
  // - 항상 루트 값이 빠지고,
  // - 제일 마지막 값을 루트에 갖다 놓는다.
  // - 자식들과 비교해서 작으면 계속 내려간다.
  pop() {
    // 마지막 원소가 안 빠지는 문제가 생겨서 => 마지막 원소까지 빼 줌!
    if (this.heap.length > 2) return this.heap.pop();

    let returnValue = this.heap[1]; // null 다음에 첫 번째 값
    this.heap[1] = this.heap.pop(); // 가장 마지막 값을 루트에 갖다 넣어준다.

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // 일단 자식보단 작아. => 그니까 자식 중 더 큰 값이랑 바꿔주자!
      // 왜냐면 최대 힙이니까 가장 큰 게 루트로 와야 해!
      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        currentIndex = leftIndex;
      }
      // 만약 오른쪽이 더 크다면... 오른쪽이랑 바꿔준다.
      else {
        let temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(3);
heap.push(96);
heap.push(65);
heap.push(44);
console.log(heap); // 그래서 heap의 길이는 1개는 무조건 남겨놔야 한다. => null임!
