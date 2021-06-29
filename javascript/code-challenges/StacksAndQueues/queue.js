'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
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

  peek(){
    let temp = this.front;
    if (temp === null) {
      throw 'empty stack';
    } else
      return temp;
  }

  isEmpty() {
    if (queue === null) {
      return true;
    } else
      return false;
  }

}

let queue = new Queue(); // {front: null, back: null}

queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);
queue.enqueue(30);
queue.enqueue(35);

console.log(JSON.stringify(queue));

let fifteen = queue.dequeue();
console.log(fifteen);
console.log(JSON.stringify(queue));

let twenty = queue.dequeue();
console.log(twenty);
console.log(JSON.stringify(queue));

console.log(queue.peek());
console.log(queue.isEmpty());
