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
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    //traverse to the tail and add to the end
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    //current is null, how do we add to the list
    previous.next = new Node(value);
  }
}


class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let arrayofCharacters = key.split('');
    let sumofAsciiValues = arrayofCharacters.reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (sumofAsciiValues * 599) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);

    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();

    let entry = { [key]: value };

    this.buckets[hash].insert({ [key]: value });
    return entry;
  }


  // get a key , look up the value in our hash table and return
  get(key) {
    let hash = this.hash(key);
    return this.buckets[hash];
  }

  // returns a boolean if the key exists
  contains(key) {
    let hash = this.hash(key);
    return this.buckets[hash] ? true : false;
  }

}

let table = new HashTable(1024);

table.add('Louis', 'student');
table.add('Mike', 'student');
table.add('John', 'student');

console.log(JSON.stringify(table));

console.log(table.get('Louis'));
console.log(table.get('Mike'));

console.log(table.contains('John'));
console.log(table.contains('Peter'));

module.exports = {HashTable, LinkedList, Node};
