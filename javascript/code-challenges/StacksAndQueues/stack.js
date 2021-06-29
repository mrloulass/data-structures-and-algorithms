'use stict';

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

  isEmpty() {
    if (stack === null) {
      return true;
    } else
      return false;
  }
}

let stack = new Stack();

stack.push(0);
stack.push(5);
stack.push(9);
stack.push(7);
stack.push(3);
stack.push(1);

console.log(JSON.stringify(stack));

let one = stack.pop();
console.log(one);
console.log(JSON.stringify(stack));

let three = stack.pop();
console.log(three);
console.log(JSON.stringify(stack));

let seven = stack.pop();
console.log(seven);
console.log(JSON.stringify(stack));

console.log(stack.peek());
console.log(stack.isEmpty());
