'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let endNode = this.head;
      while (endNode.next !== null) {
        endNode = endNode.next;
      }
      endNode.next = newNode;
      return this.head;
    }
  }

  // insertBefore(value, newVal) {
  //   let newNode = new Node(newVal);
  //   let current = 

  // }

  // insertAfter(value, newVal) {

  // }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  includes(value) {
    let current = this.head;
    while (current !== null) {
      current = current.next;
    }
  }
}

const list = new LinkedList();

const A = new Node('A');

list.head = A;

const B = new Node('B');

list.head.next = B;

const C = new Node('C');

list.head.next.next = C;

const D = new Node(false);

list.head.next.next.next = D;

list.insert('Z');
list.includes();
list.toString();
list.append('Y');
list.insertBefore('B', 'L');
module.exports = LinkedList;
