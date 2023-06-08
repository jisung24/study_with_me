"use strict";
class Tree {
  constructor(val) {
    this.val = val;
    this.leftNode = null;
    this.rightNode = null;
  }

  getVal() {
    return this.val;
  }

  setVal(val) {
    this.val = val;
  }

  setLeftNode(node) {
    this.leftNode = node;
  }

  getLeftNode(node) {
    return this.leftNode;
  }

  setRightNode(node) {
    this.rightNode = node;
  }

  getRightNode(node) {
    return this.rightNode;
  }

  // 중위순회
  InOrderTree(node) {
    if (!node) {
      return;
    }

    this.InOrderTree(node.leftNode);
    console.log(node.val);
    this.InOrderTree(node.rightNode);
  }

  // 전위순회
  preOrderTree(node) {
    if (!node) {
      return;
    }

    console.log(node.val);
    this.preOrderTree(node.leftNode);
    this.preOrderTree(node.rightNode);
  }

  // 후위순회
  postOrderTree(node) {
    if (!node) {
      return;
    }

    this.postOrderTree(node.leftNode);
    this.postOrderTree(node.rightNode);
    console.log(node.val);
  }
}

const root = new Tree(1);
let node = new Tree(2);
console.log(root.InOrderTree(root));
