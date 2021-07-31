'use strict';
jest.mock('../Graph.js');
const { Vertex, Edge, Graph } = require('../Graph.js');

beforeEach(() => {
  Vertex.mockClear();
  Edge.mockClear();
  Graph.mockClear();
});

describe('Tests to prove the following functionality', () => {


  test('Node can be successfully added to the graph', () => {

  });

  test('An edge can be successfully added to the graph', () => {

  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {

  });

  test('All appropriate neighbors can be retrieved from the graph', () => {

  });

  test('Neighbors are returned with the weight between nodes included', () => {

  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {

  });

  test('A graph with only one node and edge can be properly returned', () => {

  });

  test('An empty graph properly returns null', () => {

  });

});
