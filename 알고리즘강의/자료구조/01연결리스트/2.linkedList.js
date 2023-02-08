"use strict";
// 사실 코딩테스트에서 단일 연결리스트를 직접 구현해서 로직을 짜는 일은 없어..
// 근데 그냥 한 번 쯤은 충분히 해봐도 돼!

// 각각의 node
class Node {
  constructor(value) {
    this.value = value; // 노드의 값
    this.next = null; // 처음에는 아무것도 들어있지 않은 노드야!
    // 이제 그 노드의 위치에 따라서 next를 할당해주면 돼!
    // 그니까 값은 들어있는데, 그 노드가 어디 들어갈 지 모르니까
    // next는 위치에 따라 달라지기 때문에 null이다.
  }
}

// Singly Linked List : head에서 tail까지 단방향으로 이어지는 list이다.

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 값 찾기 O(n) 걸림 : 어떤 값인 지 미리 알 수 없어.
  // 다 열어봐야 돼... head부터!
  find(value) {
    let currNode = this.head; // head를 가리키게 한다!
    // 첫 번째 요
    while (currNode.value !== value) {
      // 값을 찾기 전 까지 반복한다!
      currNode = currNode.next; // 계속 다음 요소의 주소값을 할당해서
      // 값을 찾기 전 까지 계속 순회하게 만든다.
    }

    return currNode;
  }

  // 끝 부분에 추가 : append
  // 원래 끝 주소값을 추가되는 값에 연결
  // 추가되는 요소의 pointer은 null로!

  append(newValue) {
    const newNode = new Node(newValue);
    // 추가된 값을 갖고있는 노드!
    if (this.head === null) {
      // 만약 연결리스트에 값이 없다면
      this.head = newNode; // head가 추가된 노드가 된다.
      this.tail = newNode; // 마지막도 newNode가 된다.
    } else {
      // 만약 값이 있다면,
      this.tail.next = newNode; // 다음 노드를 newNode로 가리키게 하고,
      this.tail = newNode; // 끝을 newNode로 설정해준다.
    }
  }

  // 중간에 추가
  insert(node, newValue) {
    // 이전요소, 새로운 값
    let newNode = new Node(newValue); // 값만 갖고있는 노드 하나 생성
    // 중간에 추가니까 주소값 옮겨줘야 햐!
    newNode.next = node.next;
    // 이전 요소가 가리키던 다음 요소를
    // 새로운 요소가 가리키게 한다.
    // 이전 요소는 이제 새롭게 생성된 애를 가리키게 함.
    node.next = newNode;
  }

  // 값을 찾은 후 삭제  : 따라서, On이 걸림.
  remove(value) {
    let prevNode = this.head; // 처음부터 돌기위해 일단 this.head부터 넣어줘서 밑에 반복문으로 돌린다.

    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
}
