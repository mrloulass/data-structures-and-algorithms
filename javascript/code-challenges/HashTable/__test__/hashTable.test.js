'use strict';

jest.mock('../index.js');
const { HashTable, LinkedList, Node } = require('../index.js');

beforeEach(() => {
  HashTable.mockClear();
  LinkedList.mockClear();
  Node.mockClear();
});

describe('Testing hash table Functionality', () => {

  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {

  });


  test('Retrieving based on a key returns the value stored', () => {

  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {

  });

  test('Successfully handle a collision within the hashtable', () => {

  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

  });

  test('Successfully hash a key to an in-range value', () => {

  });

});
