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

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    let current = value;
    while (current !== null) {
      current = current.next;
    }
    if (!this.head) {
      newNode = this.head;
    }
    newNode.next = current;
    // return this.head;
  }
}


const list = new LinkedList();

let A = new Node('A');

list.head = A;

let B = new Node('B');

list.head.next = B;

let C = new Node('C');

list.head.next.next = C;

let D = new Node(false);

list.head.next.next.next = D;

list.includes();
list.toString();
list.insert('Z');
list.append('Y');
// list.insertBefore('B', 'L');
console.log(list.append('Y2'));

module.exports = LinkedList;
