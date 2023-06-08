class MaxHeap {
  constructor() {
    this.heap = [null]; // 가장 최상위 루트에 null을 넣어준다.
  }

  // 힙 값 넣기
  // - 넣고, 루트가 자식들보다 큰 값이 올 수 있도록, 정렬해야함.
  // 넣기 + 정렬
  // 🔴 가장 마지막 공간에 값이 들어간다 🔴
  push(value) {
    this.heap.push(value); // 값을 넣어준다.

    // 부모와 위치를 계속해서 바꿔주면서 정렬한다.
    // 이제 내 위치를 계속해서 정렬해서 찾아줘야 돼!
    let currentIndex = this.heap.length - 1; // 가장 마지막 요소의 index
    let parentIndex = parseInt(currentIndex / 2); // 부모의 index

    while (
      parentIndex !== 0 || // 부모가 null이면 없다는 뜻임 => 요소가 있다면!
      this.heap[parentIndex] < value // 부모가 내가 삽입한 수보다 작으면 안 돼..!
    ) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex; // 바꿨으면 위치 바꿔줌!
      parentIndex = parseInt(currentIndex / 2);
    }
  }

  // 가장 위에 있는 노드를 삭제하고,
  // ❗️그래야 가장 큰 값(최대힙)이든, 가장 작은 값(최소힙)이든 구현이 됨.
  // 마지막에 있는 원소를 가장 위 노드에 놓고 정렬 시작한다.
  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    // 가장 마지막에 있는 노드가 가장 위로 올라옴..!

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    // 정렬!!

    while (
      // 이제 노드를 왼쪽, 오른쪽 둘 중 하나랑 비교!
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // 이제 가장 큰 값을 찾기 위해서
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // 현재랑 right이랑 바꿈!
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // 왼쪽이랑 바꾼다.
        const temp = this.heap[currentIndex];
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

const heap = new MaxHeap();
heap.push(1);
heap.push(100);
heap.push(69);
heap.push(44);
console.log(heap);
