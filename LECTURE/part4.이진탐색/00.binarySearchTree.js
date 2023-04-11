"use strict";
// 선형 탐색 트리 : 삽입 삭제가 빠르다.
// 왼 < 중 < 오
// 중복 허용x
// 완전 정렬!

// 추가
// => 루트를 추가한다.
// => 추가된 값을 루트보다 작으면 왼쪽
// => 크면 오른쪽
// => 서브트리의 루트와도 계속 비교한다.

// 삭제
// 리프 노드를 삭제할 경우 => 그냥 지우면 됨
// 자식 1개 삭제 => 그걸 삭제하고, 그 자식을 가리키게 하면 됨.
// 자식을 2개 갖고있는 노드 삭제
// - 삭제할 원소의 오른쪽 자식들 중에 가장 작은 값을 삭제할 원소 자리로 옮긴다.
// - 왼쪽 자식 중에서 가장 큰 값을 삭제할 원소 자리로 옮긴다.

class Node {
  constructor(value) {
    this.value = value; // 추가할 값
    this.left = null; // 왼쪽 pointer;
    this.right = null; // 오른쪽 pointer;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    // 루트에 넣어줄 값!
  }

  // 삽입!
  insert(value) {
    // 노드를 하나 생성한다.
    // 빈 노드!
    // 루트도 없을경우 루트자리에 노드를 넣어준다.
    const newNode = new Node(value);
    // 노드에 값을 넣어준다.
    if (this.root === null) {
      // tree요소가 0개라면
      // 루트에 넣어준다.
      this.root = newNode;
      return;
    }

    // 루트에 값이 있다면!
    // 이제 비교해야 돼!
    let currentNode = this.root;
    while (currentNode !== null) {
      // 빌 때 까지...!
      if (currentNode.value < value) {
        // 삽입한 값이 현재 비교되는 값보다 크면
        // 오른쪽으로 이동한다.
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(8);
bst.insert(6);
bst.insert(5);
bst.insert(2);
console.log(bst);
