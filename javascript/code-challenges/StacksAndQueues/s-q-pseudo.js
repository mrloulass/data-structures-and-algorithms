'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    let current = this.top;
    if (current === null) {
      throw 'empty stack';
    } else
      return current;
  }
}

class PseudoQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {

    // Create a new Node from the input value.
    let newNode = new Node(value);

    if (!this.rear) { // if there is no rear??
      this.rear = newNode;

      // also set the front if the first node.
      this.front = newNode;
    } else {
      this.rear.next = newNode;

      // Set the `rear` of the queue to the new Node.
      this.rear = newNode;
    }
  }

  dequeue() {

    // look direcly at the front Node(set temp to front of queue). 
    let temp = this.front;

    // Set the `front` of the queue to the (front|temp)next node.
    this.front = temp.next;

    // set `temp`.next to null (remove al node references)
    // return `temp` node value;
    temp.next = null;
    return temp.value;
  }
}


let stack = new Stack();

stack.push('F');
stack.push('E');
stack.push('D');
stack.push('C');
stack.push('B');
stack.push('A');

console.log(JSON.stringify(stack));

let A = stack.pop();
console.log(A);
console.log(JSON.stringify(stack));

let B = stack.pop();
console.log(B);
console.log(JSON.stringify(stack));

let C = stack.pop();
console.log(C);
console.log(JSON.stringify(stack));

console.log(stack.peek());

