

// ------------------------
// Instantiate a new graph
var Graph = function() {
  // object: key is node's value, value is an array of edges it's connected to
  this._nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // check if node exists,
    // if yes, don't do anything
  // else, set to a nested empty object with edges
  this._nodes[node] = this._nodes[node] || { edges: {} };
 };

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this._nodes[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // check if node exists
  if (!this.contains(node)) {
    // if not, return
    return;
  }
  // if it does
  if (this.contains(node)) {
    // loop through the current node's edges
      // remove edges between node to be deleted and all other connected nodes
      for (var targetNode in this._nodes[node].edges) {
        this.removeEdge(node, targetNode);
      }
    // delete the node
    delete this._nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if there is no fromNode OR there is no toNode
  if (!this.contains(fromNode)) {
    // then return
    return false;
  }
  // look at the edges of the fromNode and check if the toNode exists
  return !!this._nodes[fromNode].edges[toNode];
    // if yes, return true

};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if there is no fromNode OR there is no toNode
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    // then return
    return;
  }

  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if there is no fromNode OR there is no toNode
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    // then return
    return;
  }

  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];  

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop through each key in the graph
    // execute callback function on the key 
  _.each(this._nodes, function(value, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Constant because we are using only objects to implement
