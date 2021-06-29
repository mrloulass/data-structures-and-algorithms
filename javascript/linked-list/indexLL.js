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
    this.tail = null;
    this.lenght = 0;
  }

  // method: Add new node to the head of Linked List. Returns nothing
  insert(value) {

  }

  // method: Indicates whether that value exists as a Node’s value somewhere within the list. Returns Boolean
  includes(value) {

  }

  //method: Returns: a string representing all the values in the Linked List,
  toString() {

  }
}
const list = new LinkedList();

let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D);

module.exports = LinkedList;
