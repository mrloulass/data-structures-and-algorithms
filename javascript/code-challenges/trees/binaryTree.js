'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  postOrder() {

    let array = [];

    const walk = (node) => {

      //look at the left
      if (node.left) walk(node.left);

      //before we get to walk on right side, the above fuction call should return
      //look at the right
      if (node.right) walk(node.right);

      //process the value
      array.push(node.value);
      // console.log(node.value);
      console.log(array);
    };
    walk(this.root);
  }

  inOrder() {
    const walk = (node) => {

      //look at the left
      if (node.left) walk(node.left);

      //process the value
      console.log(node.value);

      //look at the right
      if (node.right) walk(node.right);
    };
    walk(this.root);
  }

  preOrder() {
    const walk = (node) => {

      //process the value
      console.log(node.value);

      //look at the left
      if (node.left) walk(node.left);

      //look at the right
      if (node.right) walk(node.right);
    };
    walk(this.root);
  }

  maximumValue() {
    const walk = (node) => {
      if (walk(node.left) > node.value)
        node.value = walk(node.left);

      if (walk(node.right) > node.value);
      node.value = walk(node.right);
    };
    return walk();
  }

  breadthFirst(tree){

  }

}



const bt = new BinaryTree();

bt.root = new Node(10);
bt.root.left = new Node(5);
bt.root.right = new Node(20);
bt.root.left.left = new Node(3);
bt.root.left.right = new Node(7);
bt.root.right.left = new Node(15);
bt.root.right.right = new Node(21);

console.log(JSON.stringify(bt));
//console.log(bt);
//console.table(bt);
console.log('Post Order Traversal');
bt.postOrder();


console.log('Pre Order Traversal');
bt.preOrder();

console.log('In Order Traversal');
bt.inOrder();

console.log('Maximum Value', bt.maximumValue());


class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}

const bst = new BinarySearchTree();

bst.add(105);
bst.add(35);
bst.add(260);
bst.add(95);
bst.add(45);
bst.add(200);

console.log(JSON.stringify(bst));

console.log(bst.contains(105));
console.log(bst.contains(121));

